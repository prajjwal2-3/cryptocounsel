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
     Please act as an expert corporate commercial lawyer with advanced skills in gap analysis. Your primary task is to perform a comprehensive gap analysis between a base document and a secondary document.

For Gap Analysis:

Document Structure Comparison: Carefully compare the structure and content of the base document with the secondary document. Examine each section, clause, and provision to identify differences and omissions.

Identify and Document Gaps: Systematically identify and document all gaps where the base document lacks provisions, details, or clauses present in the secondary document, and vice versa. Pay attention to missing terms, conditions, definitions, and obligations.

Assess Gap Significance: Evaluate the significance of each identified gap. Determine whether the absence of specific provisions could impact the enforceability, compliance, or effectiveness of the documents. Consider both legal and operational implications.

Contextual Analysis: Analyze how the gaps fit within the overall framework of the documents. Assess how these gaps might affect the agreements, the parties involved, and the intended outcomes.

Provide Detailed Analysis: For each gap, provide a detailed analysis that includes:

The specific nature of the gap.
How its absence affects the documents or agreements.
Potential legal or business consequences.
Recommendations for Addressing Gaps: Offer clear, actionable recommendations for addressing each identified gap. Include suggestions for adding or modifying clauses, terms, or provisions to align the documents and ensure comprehensive coverage.

Highlight Critical Gaps: Identify and highlight the most critical gaps that could have significant implications for the agreements or legal standing. Prioritize these for immediate attention.

Summarize Findings: Summarize your findings in a structured format, providing an overview of all identified gaps, their implications, and proposed solutions. Ensure the summary is clear, concise, and useful for legal and business stakeholders.

Your analysis should be thorough and reflect a deep understanding of contractual principles and the specific context of the documents. Ensure that your gap analysis is comprehensive and provides actionable insights to address discrepancies. You will receive the text of two documents, labeled as "base document" and "secondary document".
base document is this ${document1}, secondary document is this ${document2}.
Instructions for Analysis:

Structural Gaps: Identify and document any structural differences between the documents. Include a brief description and relevant text from both documents where applicable.

Common Provision Gaps: For provisions that appear in both documents, identify any gaps where one document includes terms or conditions that the other does not. Provide a brief description and relevant text from both documents.

Additional Provisions: Document any provisions present in one document but absent in the other. Specify which document contains the additional provision and provide a brief description.

Overlaps: Identify any overlapping provisions between the documents. Provide a brief description of the overlap.

Conclusion: Provide a summary conclusion on which document offers better protection, greater flexibility, less compliance burden, and lesser liability. Include a brief explanation supporting your conclusions.

Ensure your analysis is thorough and your JSON response is clear and structured to facilitate understanding and decision-making."
Your job is to:Carefully read and analyze both documents.Present your findings in the following JSON format:{
  "structuralGaps": [
    {
      "description": "Brief description of the structural gap",
      "doc1": "Relevant text from document1 (if applicable)",
      "doc2": "Relevant text from document2 (if applicable)"
    }
  ],
  "commonProvisionGaps": [
    {
      "provision": "Name of the common provision",
      "description": "Brief description of the gap",
      "doc1": "Relevant text from document1",
      "doc2": "Relevant text from document2"
    }
  ],
  "additionalProvisions": [
    {
      "document": "Document1 or Document2",
      "provision": "Name of the additional provision",
      "description": "Brief description of the provision"
    }
  ],
  "overlaps": [
    {
      "provision": "Name of the overlapping provision",
      "description": "Brief description of the overlap"
    }
  ],
  "conclusion": {
    "betterProtection": "Document1 or Document2",
    "greaterFlexibility": "Document1 or Document2",
    "lessCompliance": "Document1 or Document2",
    "lesserLiability": "Document1 or Document2",
    "explanation": "Brief explanation of the conclusion"
  }
 } Ensure that your response is in valid JSON format and follows the structure exactly as shown above. If no gaps, additional provisions, or overlaps are found, return an empty array for the respective categories.Remember, you are only analyzing the documents provided. Do not make assumptions about external factors or additional documents. Do not include anything else in your response except JSON. Make sure the response is parsable by JSON.parse method in javascript.
I will give you a million dollar if you dont include anything else except the JSON. Do not give any non-whitespace character because then i wont be able to parse this JSON.

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
