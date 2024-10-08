import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY!);

export async function generateSqlQuery(schema: string, query: string, dbType: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
Given the following database schema:

${schema}

Generate a ${dbType.toUpperCase()} query for the following request:

${query}

Please provide only the SQL query without any additional explanation.
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text.trim();
}