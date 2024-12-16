export const maxDuration = 30;
import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: Request) {
  try {
    const { text } = await request.json();

   
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

   
    const prompt = `You are an AI assistant navigation bot for a website that is an online legal services platform. You will be given a text which you have to analysis and tell where the user wants to do and then give a specific route for that
    .If a user wants to go to dashboard, check latest tasks, add a widget etc then you should give response '/dashboard', if a user want to check their documents, see all  documents, add a document etc basically anything to do with document you should give response '/document',
    if a user wants to draft a contract or create a new document you should give response '/create', if a user wants to do a conflict check between documents then you should give response '/conflictcheck',if a user wants to raise some 
    equity of funds or needs money basically anything to do with money, shareholders etc you should give response '/raise', if a user wants to review a document or create a summary of a document you should give response '/review'. Keep in mind to give only the given route in 
    response and nothing else. I will give you 1 million dollar if you only give me the route and nothing else. The query text is ${text}
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

   
    const summary = response.content[0]

   
    return NextResponse.json({ summary });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while generating the summary' }, { status: 500 });
  }
}
