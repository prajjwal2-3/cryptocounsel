export const maxDuration = 60;
import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: Request) {
  try {
    const { documentText } = await request.json();

    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

    const prompt = `You are an AI assistant with the expertise of a senior lawyer with 30 years of experience in contract law and document analysis. Your task is to generate a comprehensive summary of a legal document, providing enough detail to make reading the original document unnecessary in most cases.Please analyze the following legal document:<legal_document>
${documentText}
</legal_document>Generate a detailed summary of the document using the following structure:<legal_document_summary>
  <basic_summary>
    Provide a brief overview of the document in 2-3 sentences.
  </basic_summary>
  <!-- list down all the key commercial terms in the document in the given format below  -->
  <key_commercial_terms>
    <term>
      <content>
        The term should be a line with at least 17-20 words. Strictly ensure it contains at least 17-20 words to adequately describe the commercial term.
      </content>
      <description>
        The description should be a paragraph with exactly 100-120 words. Show the provision for reading. Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement. Include connected or linked rights and obligations within the agreement (interconnections).
      </description>
    </term>
  </key_commercial_terms>
 <!-- list down all the mutual rights in the document in the given format below  -->
  <mutual_rights>
    <right>
      <content>
        The right should be a line with at least 17-20 words. Strictly ensure it contains at least 17-20 words to adequately describe the mutual right.
      </content>
      <description>
        The description should be a paragraph with exactly 100-120 words. Show the provision for reading. Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement. Include connected or linked rights and obligations within the agreement (interconnections).
      </description>
    </right>
  </mutual_rights>
 <!-- list down all the individual rights and obligations in the document in the given format below  -->
  <independent_rights_and_obligations>
    <right_obligation>
      <content>
        The right or obligation should be a line with at least 17-20 words. Strictly ensure it contains at least 17-20 words to adequately describe the independent right or obligation.
      </content>
      <description>
        The description should be a paragraph with exactly 100-120 words. Show the provision for reading. Provide key details of the provision including but not limited to scope, time period/timing, pricing, trigger, process, consequences in the agreement. Include connected or linked rights and obligations within the agreement (interconnections).
      </description>
    </right_obligation>
  </independent_rights_and_obligations>
</legal_document_summary>
dont include anything else in the response like here is your response and all, only give the summary in the specified tags.

`;

    const response = await anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 3500,
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

    const results = response.content[0];

    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while generating the summary' }, { status: 500 });
  }
}
