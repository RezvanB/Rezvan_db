import { DataAPIClient } from "@datastax/astra-db-ts"
import OpenAI from "openai"
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter"
import "dotenv/config"


type SimilarityMetric = "dot_product" | "cosine" | "euclidean"



const { ASTRA_DB_NAMESPACE, ASTRA_DB_COLLECTION, ASTRA_DB_API_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN, OPEN_AI_API_KEY }  = process.env

const openai = new OpenAI({ apiKey: OPEN_AI_API_KEY })

const PortfolioData = [

    'https://docs.google.com/document/d/1GP0lx7bY6ZHNeoE9hn6pU8PPYx67hh2bW-sB1sppvJ8/edit?tab=t.0',

]

const client = new DataAPIClient(ASTRA_DB_APPLICATION_TOKEN!)
const db = client.db(ASTRA_DB_API_ENDPOINT!, { keyspace: ASTRA_DB_NAMESPACE! })

const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 512,
    chunkOverlap: 100
})


const createCollection = async ( similarityMetric: SimilarityMetric = "dot_product" ) => {

  const res =   await db.createCollection (ASTRA_DB_COLLECTION, {
     vector: {
    dimension: 1536,
    metric: similarityMetric
  }})

  console.log(res)
}

const loadSampleData = async ( ) => {

   const collection =   await db.collection  ( ASTRA_DB_COLLECTION)
    for await (const url of PortfolioData ) { 
        const contnet =  await scrapePage(url)
        const chunks= await splitter.splitText(contnet) 
        for await (const chunk of chunks ) { 
                  
            const embedding = await openai.embeddings.create({
                model: "text-embedding-3-small"  , 

                input: chunk, 
                encoding_format : "float"
 
            })

            const vector = embedding.data[0].embedding

            const res = await collection.insertOne({
            $vector: vector,
            text: chunk 

            })
            
            console. log(res)


             


        }
    }
}


 const scrapePage = async (url: string) => { 
    try {
        const response = await fetch(url);
        const html = await response.text();
        return html.replace(/<[^>]*>?/gm, '');
    } catch (error) {
        console.error(`Error scraping ${url}:`, error);
        return '';
    }
 }

 createCollection().then(() => loadSampleData())