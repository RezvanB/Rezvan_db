"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useSpeechRecognition } from "../hooks/useSpeechRecognition";
// import { useChat } from "ai/react";

export default function AISection() {
  const [isTyping, setIsTyping] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [placeholderText, setPlaceholderText] = useState("Your quick questions about me...");
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content: "Hello! I'm an AI assistant with access to Reza's portfolio data. Ask me anything about his work, projects, or expertise!",
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  
  // Speech recognition hook
  const {
    isListening,
    transcript,
    isSupported,
    error: speechError,
    startListening,
    stopListening,
    resetTranscript,
    setAutoSendCallback
  } = useSpeechRecognition();

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle speech transcript updates
  useEffect(() => {
    if (transcript) {
      const input = document.querySelector('#ai input[type="text"]') as HTMLInputElement;
      if (input) {
        input.value = transcript;
        // Trigger input event to update any validation or UI state
        input.dispatchEvent(new Event('input', { bubbles: true }));
      }
    }
  }, [transcript]);

  // Auto-send function for speech recognition
  const handleAutoSend = useCallback(async (speechTranscript: string) => {
    if (!speechTranscript.trim() || isTyping) return;

    // Stop speech recognition
    stopListening();

    // Open chat if it's not already open
    if (!isChatOpen) {
      setIsChatOpen(true);
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: speechTranscript.trim(),
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    resetTranscript(); // Clear speech transcript
    setIsTyping(true);

    try {
      console.log('Auto-send starting with transcript:', speechTranscript);
      
      // Call the RAG API first to get context
      const ragResponse = await fetch('/api/rag', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: speechTranscript.trim() })
      });

      let context = '';
      if (ragResponse.ok) {
        const ragData = await ragResponse.json();
        context = ragData.context || '';
        console.log('RAG Context retrieved:', context.substring(0, 100) + '...');
      } else {
        console.error('RAG API failed:', ragResponse.status, ragResponse.statusText);
      }

      // Call the chat API with context
      const chatResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, userMessage],
          context 
        })
      });

      if (chatResponse.ok) {
        const chatData = await chatResponse.json();
        const aiMessage = {
          id: messages.length + 2,
          role: "assistant",
          content: chatData.message,
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
        console.log('Auto-send successful');
      } else {
        console.error('Chat API failed:', chatResponse.status, chatResponse.statusText);
        throw new Error(`Chat API failed: ${chatResponse.status}`);
      }
    } catch (error) {
      console.error('Auto-send error:', error);
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'Unknown error',
        speechTranscript
      });
      
      const fallbackResponse = {
        id: messages.length + 2,
        role: "assistant",
        content: "I'm sorry, I'm having trouble accessing my knowledge base right now. Please try again later.",
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, isChatOpen, messages, stopListening, resetTranscript]);

  // Set up auto-send callback
  useEffect(() => {
    setAutoSendCallback(handleAutoSend);
  }, [setAutoSendCallback, handleAutoSend]);

  // Typing animation for placeholder
  useEffect(() => {
    const placeholderMessages = [
      "Your quick questions about Reza...",
      "Ask me anything...",
      "Ask about ThunderVolt or WattShare..."
    ];

    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;

    const typeText = () => {
      const fullText = placeholderMessages[currentIndex];
      
      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setPlaceholderText(currentText);

      if (!isDeleting && currentText === fullText) {
        // Wait at the end
        animationRef.current = setTimeout(() => {
          isDeleting = true;
          typeText();
        }, 2000);
      } else if (isDeleting && currentText === "") {
        // Move to next message
        isDeleting = false;
        currentIndex = (currentIndex + 1) % placeholderMessages.length;
        animationRef.current = setTimeout(typeText, 500);
      } else {
        // Continue typing/deleting
        const speed = isDeleting ? 50 : 100;
        animationRef.current = setTimeout(typeText, speed);
      }
    };

    // Start animation after a short delay
    animationRef.current = setTimeout(typeText, 1000);

    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, []);

  const handleSendMessage = async (e: React.FormEvent) => {
    
    e.preventDefault();
    const input = e.currentTarget.querySelector('input') as HTMLInputElement;
    const message = input.value.trim();
    
    if (!message) return;

    // Stop speech recognition if it's running
    if (isListening) {
      stopListening();
    }

    // Stop the placeholder animation when user starts typing
    if (animationRef.current) {
      clearTimeout(animationRef.current);
      animationRef.current = null;
    }

    // Open chat if it's not already open
    if (!isChatOpen) {
      setIsChatOpen(true);
    }

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      content: message,
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);
    input.value = "";
    resetTranscript(); // Clear speech transcript
    setIsTyping(true);

    try {
      // Call the RAG API first to get context
      const ragResponse = await fetch('/api/rag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: message }),
      });

      let context = '';
      if (ragResponse.ok) {
        const ragData = await ragResponse.json();
        context = ragData.context || '';
        console.log('RAG Context:', context);
        console.log('RAG Results count:', ragData.results);
      } else {
        console.error('RAG API Error:', ragResponse.status, await ragResponse.text());
      }

      // Use the chat API instead of direct OpenAI call
      const chatResponse = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      });

      if (chatResponse.ok) {
        // Handle JSON response
        const chatData = await chatResponse.json();
        const aiMessage = {
          id: messages.length + 2,
          role: "assistant",
          content: chatData.message,
          timestamp: new Date().toLocaleTimeString()
        };
        setMessages(prev => [...prev, aiMessage]);
      } else {
        const errorText = await chatResponse.text();
        console.error('Chat API Error:', errorText);
        throw new Error(`Chat API failed: ${chatResponse.status}`);
      }
    } catch (error) {
      console.error('Error calling AI API:', error);
      
      // Fallback response
      const fallbackResponse = {
        id: messages.length + 2,
        role: "assistant",
        content: "I'm sorry, I'm having trouble accessing my knowledge base right now. Please try again later.",
        timestamp: new Date().toLocaleTimeString()
      };
      
      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleMicrophoneClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <section id="ai" className="pt-16 pb-4 sm:py-20 px-2 sm:px-4 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-6 text-black">
            Ask Anything About Me
          </h2>
          {/* <p className="text-lg sm:text-xl max-w-2xl mx-auto text-gray-600">
       
          </p> */}
        </div>

        {/* Clean Chat Interface */}
        <div className="bg-white rounded-3xl border-2 border-white p-8">
          {/* Toggle Button - Only show when there are messages */}
          {messages.length > 1 && (
            <div className="flex justify-center mb-4">
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className="bg-white hover:bg-white hover:shadow-sm text-black p-2 rounded-full transition-colors"
                title={isChatOpen ? "Close chat" : "Open chat"}
              >
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isChatOpen ? "rotate-180" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Messages Area - Only show when chat is open */}
          {isChatOpen && (
            <div 
              ref={messagesContainerRef} 
              className="h-96 overflow-y-auto mb-6 space-y-4 hide-scrollbar"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-lg px-4 py-3 rounded-2xl ${
                      message.role === "user"
                        ? "bg-white text-black"
                        : "bg-white shadow-md text-black text-bold font-bold "
                    }`}
                  >
                    <p className="text-sm font-medium">{message.content}</p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-black px-4 py-3 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 bg-black rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}

          {/* Speech Error Display */}
          {speechError && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 text-sm">{speechError}</p>
            </div>
          )}

          {/* Input Form */}
          <form onSubmit={handleSendMessage}>
            <div className="flex gap-3">
              <div className="flex-1 relative group">
                <div className="absolute inset-0 rounded-full bg-gray-300 p-0.5 group-focus-within:bg-gradient-to-r group-focus-within:from-blue-500 group-focus-within:to-purple-600 group-hover:bg-gray-400 transition-all duration-300">
                  <input
                    type="text"
                    placeholder={isListening ? "Listening... (will auto-send in 3s after you stop)" : placeholderText}
                    className="w-full h-full px-6 py-4 bg-white text-black rounded-full border-0 shadow-sm focus:outline-none focus:shadow-lg focus:shadow-blue-500/25 hover:shadow-md transition-all duration-300 font-medium placeholder-gray-500 text-base"
                    disabled={isTyping}
                    onFocus={() => {
                      // Stop animation when user focuses on input
                      if (animationRef.current) {
                        clearTimeout(animationRef.current);
                        animationRef.current = null;
                      }
                    }}
                  />
                </div>
              </div>
              
              {/* Microphone Button */}
              {isSupported && (
                <button
                  type="button"
                  onClick={handleMicrophoneClick}
                  disabled={isTyping}
                  className={`px-4 py-3 rounded-full font-bold transition-all duration-300 ${
                    isListening
                      ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                  title={isListening ? "Stop listening (auto-send enabled)" : "Start voice input (auto-send after 3s pause)"}
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {isListening ? (
                      // Stop icon
                      <path d="M6 6h12v12H6z" />
                    ) : (
                      // Microphone icon
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zM17.3 11c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c3.28-.49 6-3.31 6-6.72h-1.7z" />
                    )}
                  </svg>
                </button>
              )}
              
              <button
                type="submit"
                disabled={isTyping}
                className="bg-black hover:bg-gray-200 disabled:bg-white text-white px-6 py-3 rounded-full font-bold transition-colors disabled:cursor-not-allowed"
              >
                Ask
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
