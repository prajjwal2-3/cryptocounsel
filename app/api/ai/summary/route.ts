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

   
    const prompt = `Prepare a one-page summary of the entire document in JSON format ${text}. The JSON should have the following main sections:basicSummary: A string containing a 50-70 word summary of the document.Please ensure the JSON is properly formatted and includes all the key information from the document. Use the following structure:{
  "basicSummary": "",
  "keyCommercialTerms": [
    {
      "term": "",// the term should be a line with atleast 17-20 words. Strictly it should contain atleast 17-20 words
      "description": "" //the description should be a paragraph with exactly 100-120 words.Show the provision for reading  
Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement
Connected or linked rights and obligations within the agreement (interconnections)

    }
  ],
  "mutualRights": [
    {
      "right": "",// the right should be a line with atleast 17-20 words. Strictly it should contain atleast 17-20 words
      "description": ""//the description should be a paragraph with eactly 100-120 words.Show the provision for reading  
Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement
Connected or linked rights and obligations within the agreement (interconnections)

    }
  ],
  "independentRightsAndObligations": [
    {
      "rightObligation": "", //the right obligation should be a line with atleast 17-20 words. Strictly it should contain atleast 17-20 words
      "description": "" //the description should be a paragraph with exactly 100-120 words.Show the provision for reading  
Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement
Connected or linked rights and obligations within the agreement (interconnections)

    }
  ]
}

Please fill in this structure with the information from the document. Do not include anything else in the response except the JSON object. Ensure that the basicSummary is between 50-70 words and that all other sections accurately reflect the content of the document. Make sure that the JSON is parsable by JSON.parse function, dont include anything that might give error.`;

   
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
