"use client";

import { useState, useRef, useCallback, useEffect } from 'react';

interface SpeechRecognitionState {
  isListening: boolean;
  transcript: string;
  isSupported: boolean;
  error: string | null;
}

interface SpeechRecognitionHook extends SpeechRecognitionState {
  startListening: () => void;
  stopListening: () => void;
  resetTranscript: () => void;
  setAutoSendCallback: (callback: (transcript: string) => void) => void;
}

export const useSpeechRecognition = (): SpeechRecognitionHook => {
  const [state, setState] = useState<SpeechRecognitionState>({
    isListening: false,
    transcript: '',
    isSupported: false,
    error: null,
  });

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const finalTranscriptRef = useRef<string>('');
  const autoSendTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const onAutoSendRef = useRef<((transcript: string) => void) | null>(null);
  const isExplicitlyStoppedRef = useRef<boolean>(false);

  // Check if speech recognition is supported
  const checkSupport = useCallback(() => {
    if (typeof window === 'undefined') return false;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    return !!SpeechRecognition;
  }, []);

  // Check support on mount
  useEffect(() => {
    const supported = checkSupport();
    console.log('Speech Recognition Support Check:', supported);
    setState(prev => ({ ...prev, isSupported: supported }));
  }, [checkSupport]);

  // Initialize speech recognition
  const initializeRecognition = useCallback(() => {
    if (typeof window === 'undefined') return null;
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    recognition.maxAlternatives = 1;
    
    // Mobile-specific optimizations
    if (navigator.userAgent.match(/Mobile|Android|iPhone|iPad/)) {
      recognition.continuous = false; // Better for mobile
      recognition.interimResults = false; // Reduce mobile issues
    }

    recognition.onstart = () => {
      setState(prev => ({ ...prev, isListening: true, error: null }));
    };

    recognition.onresult = (event) => {
      let finalTranscript = '';
      let interimTranscript = '';

      // Process only new results to avoid duplication
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const result = event.results[i];
        const transcript = result[0].transcript;
        
        if (result.isFinal) {
          finalTranscript += transcript;
        } else {
          interimTranscript += transcript;
        }
      }

      // Handle mobile vs desktop differently
      const isMobile = navigator.userAgent.match(/Mobile|Android|iPhone|iPad/);
      
      if (isMobile) {
        // For mobile: only use final results to avoid duplication
        if (finalTranscript.trim()) {
          // Simple approach: replace the entire transcript for mobile
          finalTranscriptRef.current = finalTranscript;
        }
        
        // Display only final transcript on mobile
        setState(prev => ({
          ...prev,
          transcript: finalTranscriptRef.current,
        }));
      } else {
        // For desktop: use the original logic
        if (finalTranscript.trim()) {
          // Check if this final transcript is already in our accumulated text
          const currentText = finalTranscriptRef.current.toLowerCase().trim();
          const newText = finalTranscript.toLowerCase().trim();
          
          // Only add if it's not already there (prevents duplication)
          if (!currentText.includes(newText)) {
            finalTranscriptRef.current += finalTranscript;
          }
        }

        // Display final transcript + current interim
        setState(prev => ({
          ...prev,
          transcript: finalTranscriptRef.current + interimTranscript,
        }));
      }

      // Clear existing auto-send timeout
      if (autoSendTimeoutRef.current) {
        clearTimeout(autoSendTimeoutRef.current);
      }

      // Set new auto-send timeout (3 seconds after speech stops)
      if (finalTranscriptRef.current.trim() && onAutoSendRef.current) {
        autoSendTimeoutRef.current = setTimeout(() => {
          if (onAutoSendRef.current) {
            onAutoSendRef.current(finalTranscriptRef.current.trim());
          }
        }, 3000);
      }
    };

    recognition.onerror = (event) => {
      let errorMessage = 'Speech recognition error occurred';
      
      switch (event.error) {
        case 'no-speech':
          errorMessage = 'No speech detected. Please try again.';
          break;
        case 'audio-capture':
          errorMessage = 'Microphone not found or access denied.';
          break;
        case 'not-allowed':
          errorMessage = 'Microphone access denied. Please allow microphone access.';
          break;
        case 'network':
          errorMessage = 'Network error occurred. Please check your connection.';
          break;
        case 'aborted':
          errorMessage = 'Speech recognition was aborted.';
          break;
        case 'language-not-supported':
          errorMessage = 'Language not supported.';
          break;
        default:
          errorMessage = `Speech recognition error: ${event.error}`;
      }

      setState(prev => ({
        ...prev,
        isListening: false,
        error: errorMessage,
      }));
    };

    recognition.onend = () => {
      setState(prev => {
        const isMobile = navigator.userAgent.match(/Mobile|Android|iPhone|iPad/);
        
        // For mobile: restart recognition if we're still supposed to be listening
        // But only if we haven't explicitly stopped it
        if (isMobile && prev.isListening && !isExplicitlyStoppedRef.current) {
          // Small delay before restarting to prevent issues
          setTimeout(() => {
            if (recognitionRef.current && prev.isListening && !isExplicitlyStoppedRef.current) {
              try {
                recognitionRef.current.start();
              } catch (error) {
                console.log('Failed to restart recognition:', error);
              }
            }
          }, 100);
        }
        
        return { ...prev, isListening: false };
      });
    };

    return recognition;
  }, []);

  const stopListening = useCallback(() => {
    // Set flag to prevent mobile restart
    isExplicitlyStoppedRef.current = true;
    
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (autoSendTimeoutRef.current) {
      clearTimeout(autoSendTimeoutRef.current);
      autoSendTimeoutRef.current = null;
    }

    // Update state to reflect that we're no longer listening
    setState(prev => ({ ...prev, isListening: false }));
  }, []);

  const startListening = useCallback(() => {
    if (!checkSupport()) {
      setState(prev => ({
        ...prev,
        error: 'Speech recognition is not supported in this browser.',
        isSupported: false,
      }));
      return;
    }

    // Reset the explicitly stopped flag
    isExplicitlyStoppedRef.current = false;

    setState(prev => ({ ...prev, isSupported: true, error: null, transcript: '' }));
    finalTranscriptRef.current = '';

    if (!recognitionRef.current) {
      recognitionRef.current = initializeRecognition();
    }

    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        
        // Auto-stop after 30 seconds to prevent infinite listening
        timeoutRef.current = setTimeout(() => {
          stopListening();
        }, 30000);
      } catch {
        setState(prev => ({
          ...prev,
          error: 'Failed to start speech recognition. Please try again.',
        }));
      }
    }
  }, [checkSupport, initializeRecognition, stopListening]);

  const resetTranscript = useCallback(() => {
    setState(prev => ({ ...prev, transcript: '' }));
    finalTranscriptRef.current = '';
  }, []);

  const setAutoSendCallback = useCallback((callback: (transcript: string) => void) => {
    onAutoSendRef.current = callback;
  }, []);

  return {
    ...state,
    startListening,
    stopListening,
    resetTranscript,
    setAutoSendCallback,
  };
};

// Define SpeechRecognition interface for TypeScript
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  maxAlternatives: number;
  start(): void;
  stop(): void;
  abort(): void;
  onstart: ((this: SpeechRecognition, ev: Event) => void) | null;
  onresult: ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => void) | null;
  onerror: ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => void) | null;
  onend: ((this: SpeechRecognition, ev: Event) => void) | null;
}

interface SpeechRecognitionEvent extends Event {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  readonly length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  readonly length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
  message: string;
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    SpeechRecognition: {
      new (): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new (): SpeechRecognition;
    };
  }
}