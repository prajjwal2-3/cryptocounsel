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

   
    const prompt = `You are an AI assistant tasked with performing a deep conflict check between two legal documents.
     Your goal is to generate a comprehensive conflict check report that accurately identifies and analyzes any discrepancies between 
     the documents with the precision of a top law firm with over 20 years of experience.

You will be provided with two documents to compare. Document 2 is considered the base document and source of truth, while Document 1
 is the secondary document for which we are conducting the conflict check.

Here is Document 1:
<document1>
${document1}
</document1>

Here is Document 2 (base document):
<document2>
${document2}
</document2>

To perform the conflict check, follow these steps:

1. Carefully read and analyze both documents in their entirety. Pay close attention to every detail, no matter how small it may seem.

2. Identify any discrepancies, inconsistencies, or conflicts between the two documents. Be extremely thorough and consider the following areas,
 but do not limit yourself to them:
   a. Definitions of key terms
   b. Contractual obligations and responsibilities
   c. Timelines and deadlines
   d. Financial terms and conditions
   e. Intellectual property rights
   f. Termination clauses
   g. Governing law and jurisdiction
   h. Indemnification and liability clauses
   i. Currency differences
   j. Country-specific legal requirements or implications
   k. Industry-specific regulations or standards
   l. Data protection and privacy clauses
   m. Force majeure provisions
   n. Assignment and subcontracting rights
   o. Dispute resolution mechanisms
   p. Warranties and representations
   q. Confidentiality and non-disclosure provisions
   r. Compliance with applicable laws and regulations

3. For each identified conflict or discrepancy:
   a. Clearly state the nature of the conflict
   b. Provide the relevant excerpts from both documents, using XML tags to indicate the source (e.g., <document1_excerpt> and <document2_excerpt>)
   c. Analyze the potential legal implications of the conflict, considering the jurisdictions mentioned in the documents
   d. Suggest possible resolutions or areas that require further clarification
   e. Assess the severity of the conflict on a scale from 1 to 5, where 1 is minor and 5 is critical

4. Pay special attention to subtle differences that could have significant legal implications, such as:
   a. Changes in wording that might alter the interpretation of a clause
   b. Omissions of seemingly minor details that could impact enforceability
   c. Variations in legal terminology between jurisdictions
   d. Potential conflicts with local laws or regulations in the specified jurisdictions

5. Consider the broader context and potential consequences of each conflict, including:
   a. Financial implications
   b. Operational impacts
   c. Reputational risks
   d. Compliance issues
   e. Long-term business relationship effects

6. Assess the overall level of conflict between the documents on a scale from 1 to 10, where 1 represents minimal conflict and 10 represents severe,
 irreconcilable conflicts.

7. Provide a summary of the most critical conflicts found and their potential impact on the legal relationship between the parties involved.

Generate your conflict check report using the following structure:

<conflict_check_report>
<summary>
Provide a brief overview of the documents analyzed and the general findings of the conflict check. Include the nature of the documents, their apparent purpose,
 and a high-level summary of the conflicts found.
</summary>

<conflict_assessment>
For each identified conflict or discrepancy:
<conflict>
<nature>Clearly state the nature of the conflict</nature>
<document1_excerpt>Relevant excerpt from Document 1</document1_excerpt>
<document2_excerpt>Relevant excerpt from Document 2</document2_excerpt>
<legal_implications>Analyze the potential legal implications of the conflict, considering the jurisdictions mentioned in the documents</legal_implications>
<resolution_suggestions>Suggest possible resolutions or areas that require further clarification</resolution_suggestions>
<severity>Assess the severity of the conflict on a scale from 1 to 5, where 1 is minor and 5 is critical</severity>
</conflict>
</conflict_assessment>

<overall_conflict_level>
Provide your assessment of the overall level of conflict between the documents on a scale from 1 to 10. Include a detailed justification for your rating, referencing specific 
conflicts and their potential impact on the legal relationship between the parties.
</overall_conflict_level>

<critical_conflicts_summary>
Summarize the most critical conflicts found and their potential impact. Prioritize conflicts based on their severity and potential consequences. Explain how these conflicts
 could affect the enforceability of the agreement, the rights and obligations of the parties, and any potential legal or business risks.
</critical_conflicts_summary>

<recommendations>
Offer detailed recommendations for resolving the identified conflicts or areas that require further legal review. Prioritize your recommendations based on the severity and
 potential impact of the conflicts. Suggest specific actions, such as redrafting certain clauses, seeking clarification from the parties, or consulting with local legal experts
  in relevant jurisdictions.
</recommendations>

<additional_considerations>
Highlight any additional factors that should be considered, such as:
- Potential conflicts with local laws or regulations in the specified jurisdictions
- Industry-specific concerns or best practices
- Recent legal developments that may impact the interpretation or enforceability of certain clauses
- Suggestions for improving overall clarity and consistency between the documents
</additional_considerations>
</conflict_check_report>

Ensure that your analysis is thorough, precise, and reflects the expertise of a top-tier law firm. Focus on identifying substantive conflicts that could have significant legal
 implications rather than minor stylistic differences. If you're unsure about a potential conflict, err on the side of caution and include it in your report with an explanation
  of your uncertainty.

Remember to approach this task with the meticulousness of an experienced legal professional, considering all possible angles and implications of the conflicts you identify. 
Your goal is to provide a comprehensive and actionable report that will enable the parties to address and resolve any discrepancies between the documents effectively.
Illustration: if a provision in the first document says “To appoint a director you need approval from an investor director” and the second document is a director service
 agreement for the appointment of a director, you will show a conflict because you are not aware that the approval was sought from the investor director. Similarly taking 
 the same example, if the director's salary is INR 60 lakhs in the director service agreement and the first document says “for any transaction that amounts to more than US$50,000,
  the Company requires approval from an investor director”, you will have to calculate the INR 60 lakhs in dollars and convert into US$ and show a conflict as the second agreement
   is breaching the obligations under first one and you will show a conflict because you are not aware of the approval was sought from the investor director. 
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
