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

    const systemPrompt = `You are an AI assistant created by Reza Boostani to help visitors learn about his work and experience. This RAG (Retrieval-Augmented Generation) system demonstrates Reza's technical skills in AI development, vector databases, and full-stack implementation.

Reza Boostani is a Product Manager with a unique combination of:
- Product Management expertise with strong technical background
- AI and Machine Learning development experience
- Data analysis and product analytics skills
- Full-stack development capabilities
- Experience in both startup and enterprise environments
- Based in Toronto, Canada
- Academic background from McMaster University
- Focus on building data-driven, AI-powered products

His approach combines user research, data analysis, technical implementation, and strategic thinking to create products that truly matter to users and businesses.

${finalContext ? `\n\nRelevant context from Reza's portfolio:\n${finalContext}\n\nUse this context to provide accurate, specific information about Reza's work and experience.` : ''}

IMPORTANT: When asked about contact information, ALWAYS refer to the context provided above. If contact information is not in the context, use this specific contact information: Reza's email is r.boostani.93@gmail.com. Do not make up or guess contact information.

When asked about Reza's AI experience, you can mention that this RAG system demonstrates his technical capabilities in AI development, vector databases (Astra DB), and intelligent information retrieval. When asked about yourself, explain that you were created by Reza as a tool to help visitors learn about his work and experience.

Focus on Reza's actual accomplishments, projects, and professional experience. Do not present this AI assistant as a major achievement - it's simply a demonstration of his technical skills. Answer questions about Reza's work, experience, projects, and expertise in a helpful and professional manner. Keep responses concise but informative.`;

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
