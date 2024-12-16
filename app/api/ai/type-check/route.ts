export const maxDuration = 60;
import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: Request) {
  try {
    const { extractedText } = await request.json();
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }
    const anthropic = new Anthropic({
      apiKey: apiKey,
    });
    const prompt = `You are an AI assistant fined tuned to categorize legal documents in  categories 
    ;
     go through the whole document that i will provide you and give me the type of this document, in your response you should only include 
    the specified type, dont include anything else in your response except the type. The document is this: ${extractedText}. Type should not be all capital.
    `;
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 2000,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: prompt,
            },
          ],
        },
      ],
    });
    const type = response.content[0]
    return NextResponse.json({ type });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while generating the summary' }, { status: 500 });
  }
}
