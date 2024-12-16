export const maxDuration = 60;
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

   
    const prompt = `You are an AI assistant tasked with performing a comprehensive gap analysis between two legal documents. Your goal is to identify,
     analyze, and report on any gaps, discrepancies, or missing elements between the documents with the precision and insight of a lawyer with 50 years
      of experience in the legal domain.

You will be provided with two documents to compare:

Document 1:
<document1>
${document1}
</document1>

Document 2:
<document2>
${document2}
</document2>

To perform the gap analysis, follow these steps:

1. Thoroughly read and analyze both documents in their entirety, paying close attention to every detail.

2. Identify any gaps, missing elements, or areas where one document provides more comprehensive coverage than the other. Consider the following areas,
 but do not limit yourself to them:
   a. Scope and purpose of the documents
   b. Definitions and key terms
   c. Rights and obligations of parties
   d. Timelines and milestones
   e. Financial terms and conditions
   f. Intellectual property provisions
   g. Confidentiality and data protection
   h. Liability and indemnification
   i. Dispute resolution mechanisms
   j. Termination and exit clauses
   k. Compliance with applicable laws and regulations
   l. Force majeure provisions
   m. Assignment and subcontracting
   n. Warranties and representations
   o. Reporting and auditing requirements
   p. Insurance and risk allocation
   q. Change management procedures
   r. Governance and decision-making processes

3. For each identified gap or discrepancy:
   a. Clearly state the nature of the gap
   b. Provide relevant excerpts from both documents, using XML tags to indicate the source (e.g., <document1_excerpt> and <document2_excerpt>)
   c. Analyze the potential legal and business implications of the gap
   d. Suggest possible ways to address the gap or areas that require further development
   e. Assess the significance of the gap on a scale from 1 to 5, where 1 is minor and 5 is critical

4. Pay special attention to:
   a. Provisions present in one document but absent in the other
   b. Differences in the level of detail or specificity between similar clauses
   c. Potential conflicts with industry standards or best practices
   d. Areas where additional clarification or expansion would be beneficial

5. Consider the broader context and potential consequences of each gap, including:
   a. Legal risks and vulnerabilities
   b. Operational impacts
   c. Financial implications
   d. Compliance issues
   e. Long-term business relationship effects

6. Assess the overall completeness and comprehensiveness of each document on a scale from 1 to 10, where 1 represents significant gaps and 10 represents a 
highly comprehensive document.

7. Provide a summary of the most critical gaps found and their potential impact on the legal and business relationship between the parties involved.

Generate your gap analysis report using the following structure:

<gap_analysis_report>
<summary>
Provide a brief overview of the documents analyzed and the general findings of the gap analysis. Include the nature of the documents, their apparent purpose, and a high-level
 summary of the gaps found.
</summary>

<gap_assessment>
For each identified gap or discrepancy:
<gap>
<nature>Clearly state the nature of the gap</nature>
<document1_excerpt>Relevant excerpt from Document 1 (if applicable)</document1_excerpt>
<document2_excerpt>Relevant excerpt from Document 2 (if applicable)</document2_excerpt>
<implications>Analyze the potential legal and business implications of the gap</implications>
<recommendations>Suggest possible ways to address the gap or areas that require further development</recommendations>
<significance>Assess the significance of the gap on a scale from 1 to 5, where 1 is minor and 5 is critical</significance>
</gap>
</gap_assessment>

<document_completeness>
Provide your assessment of the overall completeness and comprehensiveness of each document on a scale from 1 to 10. Include a detailed justification for your rating,
 referencing specific gaps and their potential impact on the legal and business relationship between the parties.
</document_completeness>

<critical_gaps_summary>
Summarize the most critical gaps found and their potential impact. Prioritize gaps based on their significance and potential consequences. Explain how these gaps could 
affect the rights and obligations of the parties, legal protections, and any potential business risks.
</critical_gaps_summary>

<recommendations>
Offer detailed recommendations for addressing the identified gaps. Prioritize your recommendations based on the significance and potential impact of the gaps. Suggest specific
 actions, such as drafting additional clauses, expanding existing provisions, or incorporating industry-standard terms.
</recommendations>

<additional_considerations>
Highlight any additional factors that should be considered, such as:
- Industry-specific concerns or best practices
- Recent legal developments that may necessitate additional provisions
- Suggestions for improving overall clarity, consistency, and comprehensiveness of the documents
- Potential areas for future expansion or refinement of the legal framework
</additional_considerations>
</gap_analysis_report>

Ensure that your analysis is thorough, insightful, and reflects the expertise of a highly experienced legal professional. Focus on identifying substantive gaps that could 
have significant legal and business implications. If you're unsure about a potential gap, err on the side of caution and include it in your
 report with an explanation of your uncertainty.

Remember to approach this task with the depth of knowledge and foresight of a lawyer with 50 years of experience, considering all possible angles, implications, and future scenarios
 related to the gaps you identify. Your goal is to provide a comprehensive and actionable report that will enable the parties to strengthen their legal framework and minimize potential
  risks and disputes.

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

   
    const results = response.content[0]

   
    return NextResponse.json({ results });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ error: 'An error occurred while generating the summary' }, { status: 500 });
  }
}
