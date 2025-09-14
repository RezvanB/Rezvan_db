const { OPEN_AI_API_KEY } = process.env;

export async function POST(req: Request) {
  try {
    const { messages, context } = await req.json();
    const lastMessage = messages[messages.length - 1];

    // Use provided context or get from RAG if not provided
    let finalContext = context || '';
    if (!finalContext && lastMessage?.content) {
      try {
        const ragResponse = await fetch(`${req.url.replace('/api/chat', '/api/rag')}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query: lastMessage.content })
        });
        
        
        if (ragResponse.ok) {
          const ragData = await ragResponse.json();
          finalContext = ragData.context || '';
          console.log('RAG Context retrieved:', finalContext.substring(0, 100) + '...');
        }
      } catch (error) {
        console.error('RAG fetch error:', error);
      }
    }

    const systemPrompt = `You are a helpful AI assistant. ${finalContext ? `\n\nRelevant context:\n${finalContext}\n\nUse this context to provide accurate information when relevant.` : ''}`;

    // Call OpenAI directly
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPEN_AI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7,
        stream: false
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status}`);
    }

    const data = await response.json();
    const message = data.choices[0]?.message?.content || 'Sorry, I could not generate a response.';

    // Return JSON response
    return Response.json({ message });

  } catch (error) {
    console.error('Chat API Error:', error);
    return Response.json({ error: "Failed to process chat" }, { status: 500 });
  }
}
