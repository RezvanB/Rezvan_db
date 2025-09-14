import { DataAPIClient } from "@datastax/astra-db-ts";
import OpenAI from "openai";

const { ASTRA_DB_NAMESPACE, ASTRA_DB_COLLECTION, ASTRA_DB_API_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, OPEN_AI_API_KEY } = process.env;

const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY });
const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!);
const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE! });

export async function POST(req: Request) {
  try {
    const { query } = await req.json();
    
    if (!query) {
      return Response.json({ error: "Query is required" }, { status: 400 });
    }

    // Generate embedding for the query
    const embedding = await openai.embeddings.create({
      model: "text-embedding-3-small",
      input: query,
      encoding_format: "float"
    });

    const queryVector = embedding.data[0].embedding;

    // Query Astra DB for similar content
    const collection = await db.collection(ASTRA_DB_COLLECTION);
    const results = await collection.find(
      {},
      {
        sort: { $vector: queryVector },
        limit: 5,
        includeSimilarity: true
      }
    ).toArray();

    // Extract relevant context from results
    const context = results.map(doc => doc.text).join('\n\n');

    return Response.json({ context, results: results.length });
  } catch (error) {
    console.error('RAG Error:', error);
    return Response.json({ error: "Failed to retrieve context" }, { status: 500 });
  }
}
