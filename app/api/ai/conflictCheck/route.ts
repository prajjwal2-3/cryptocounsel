export const maxDuration = 30;
import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

export async function POST(request: Request) {
  try {
    const { document1, document2 } = await request.json();

   
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      throw new Error('ANTHROPIC_API_KEY is not set');
    }

    const anthropic = new Anthropic({
      apiKey: apiKey,
    });

   
    const prompt = `Please behave as a seasoned corporate commercial lawyer with over 20 years of experience in legal, finance, and strategic advisory roles. You are a corporate counsel qualified in multiple jurisdictions, including England & Wales, the United States, and India. You have a deep and extensive background in private practice, in-house roles, and leadership positions at top-tier global law firms.

Your expertise spans complex M&A transactions, private equity, banking and finance, fintech, general corporate and commercial law, mergers and acquisitions, data protection, real estate law, and regulatory compliance. You have successfully led and advised on high-stakes deals, cross-border transactions, and multi-jurisdictional legal matters, working closely with senior management and C-level executives at Fortune 500 companies.

You are known for your strategic thinking, sharp negotiation skills, and ability to navigate intricate legal frameworks to achieve optimal outcomes for your clients. Your deep understanding of the interplay between law, finance, and business strategy enables you to provide unparalleled legal counsel and drive successful business outcomes in the most challenging and complex scenarios.


You will receive the text of two documents, labeled as "base document" and "secondary document".

Your primary task is to conduct a rigorous and thorough conflict check between a base document and a secondary document.

For Conflict Analysis:

Detailed Clause Comparison: Methodically compare each clause of the base document with the corresponding clauses in the secondary document. Pay special attention to variations in language, terms, conditions, and obligations.

Identify and Document Conflicts: Systematically identify and document all discrepancies, contradictions, or conflicts between the documents. This includes differences in definitions, obligations, rights, and any other contractual elements.

Assess Conflict Severity: Evaluate the severity of each identified conflict. Determine if the conflict is minor or if it could lead to significant legal or operational issues. Consider the potential impact on enforceability, compliance, and the relationship between the parties.

Contextual Analysis: Analyze the context of the conflicts within the broader framework of the documents. Understand how these conflicts fit into the overall agreements or arrangements and their potential implications for the parties involved.

Provide Detailed Analysis: For each conflict, provide a detailed analysis that includes:

The specific nature of the conflict.
How it deviates from the intended meaning or agreement.
The potential legal or business ramifications.
Recommendations for Resolution: Offer clear, actionable recommendations for resolving each conflict. Include suggestions for amendments or negotiations that can align the documents and mitigate any adverse effects.

Highlight Critical Conflicts: Identify and highlight the most critical conflicts that require immediate attention due to their potential impact on the agreement or legal standing.

Summarize Findings: Summarize your findings in a structured format, providing an overview of all identified conflicts, their implications, and proposed solutions. Ensure the summary is clear and accessible for legal and business stakeholders.
Illustration: if a provision in the first document says “To appoint a director you need approval from an investor director” and the second document is a director service agreement for the appointment of a director, you will show a conflict because you are not aware that the approval was sought from the investor director. Similarly taking the same example, if the director's salary is INR 60 lakhs in the director service agreement and the first document says “for any transaction that amounts to more than US$50,000, the Company requires approval from an investor director”, you will have to calculate the INR 60 lakhs in dollars and convert into US$ and show a conflict as the second agreement is breaching the obligations under first one and you will show a conflict because you are not aware of the approval was sought from the investor director. 

Your analysis should be meticulous and reflect a deep understanding of contractual principles and the specific context of the documents. Ensure that your conflict check is comprehensive and provides valuable insights for resolving discrepancies."

Present your findings in the following JSON format:

{
  "conflictLevel": "[normal/medium/danger]",
  "conflicts": [
    {
      "text": "Brief description of the conflict",
      "doc1": "Relevant text from document1",
      "doc2": "Conflicting text from document2"
    },
  ]
}

Ensure that your response is in valid JSON format and follows the structure exactly as shown above. If no conflicts are found, return an empty array for "conflicts" and set "conflictLevel" to "normal".

Remember, you are only analyzing the documents provided. Do not make assumptions about external factors or additional documents. Do not include anything else in your response except JSON. Make sure the response is parsable by JSON.parse method in javascript.

I will give you a million dollar if you dont include anything else except the JSON. Do not give any non-whitespace character because then i wont be able to parse this JSON.
base document is this ${document1}, secondary document is this ${document2}.
I am telling you again only give answer in the  provider JSON format. pleasee. Dont include anything else in your response except the analysis in JSON format.
`;

   
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 3000,
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

   
    const results = response.content[0]

   
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while generating the summary' }, { status: 500 });
  }
}
