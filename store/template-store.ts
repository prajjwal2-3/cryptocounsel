import { create } from "zustand";

interface Template {
  id: number;
  name: string;
  content: string;
}

interface TemplateStore {
  templates: Template[];
  selectedTemplate: Template | null;
  chooseTemplate: (id: number) => void;
}

const useTemplateStore = create<TemplateStore>((set) => ({
  templates: [
    {
      id: 0,
      name: "Non-Disclosure Agreement",
      content: `<h1><strong>Non-Disclosure Agreement</strong></h1><p>This Non-Disclosure Agreement (NDA) is entered into by and between [Party A] ("Disclosing Party") and [Party B] ("Receiving Party"), collectively referred to as the "Parties".</p><blockquote><p>Effective Date: [Insert Date]</p></blockquote><h2><strong>1. Purpose</strong></h2><p>The purpose of this Agreement is to protect the confidential and proprietary information of the Disclosing Party in the course of [describe the specific purpose or project].</p><h2><strong>2. Definition of Confidential Information</strong></h2><p>For the purposes of this Agreement, "Confidential Information" shall include, but is not limited to:</p><ul><li><p>Trade secrets</p></li><li><p>Business strategies and plans</p></li><li><p>Financial information</p></li><li><p>Customer and supplier lists</p></li><li><p>Product designs and specifications</p></li><li><p>Any other information marked as confidential or reasonably understood to be confidential</p></li></ul><h2><strong>3. Obligations of the Receiving Party</strong></h2><p>The Receiving Party agrees to:</p><ul><li><p>Maintain the confidentiality of the Disclosing Party's Confidential Information</p></li><li><p>Use the Confidential Information solely for the Purpose stated above</p></li><li><p>Not disclose the Confidential Information to any third party without prior written consent</p></li><li><p>Take reasonable measures to protect the secrecy of the Confidential Information</p></li></ul><h2><strong>4. Exclusions</strong></h2><p>This Agreement does not apply to information that:</p><ul><li><p>Was already known to the Receiving Party prior to disclosure</p></li><li><p>Is or becomes publicly available through no fault of the Receiving Party</p></li><li><p>Is independently developed by the Receiving Party without use of the Confidential Information</p></li><li><p>Is rightfully received from a third party without breach of any obligation of confidentiality</p></li></ul><h2><strong>5. Term and Termination</strong></h2><p>This Agreement shall remain in effect for [insert duration] from the Effective Date. The obligations of confidentiality shall survive the termination of this Agreement for a period of [insert duration].</p><h2><strong>6. Return of Confidential Information</strong></h2><p>Upon request by the Disclosing Party, or upon termination of this Agreement, the Receiving Party shall promptly return or destroy all Confidential Information and any copies thereof.</p><h2><strong>7. Governing Law</strong></h2><p>This Agreement shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p><h2><strong>8. Entire Agreement</strong></h2><p>This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof and supersedes all prior agreements, oral or written, made with respect thereto.</p><h2><strong>IN WITNESS WHEREOF</strong></h2><p>The Parties hereto have executed this Non-Disclosure Agreement as of the Effective Date stated above.</p><pre><code>[Party A]                   [Party B]Signature                   SignatureName                        NameTitle                       TitleDate                        Date</code></pre><p>By signing above, each Party acknowledges that they have read, understood, and agree to be bound by the terms of this Non-Disclosure Agreement.</p>`,
    },
    {
      id: 1,
      name: "Collaboration Agreement",
      content: `<h1><strong>Collaboration Agreement</strong></h1>

<p>This Collaboration Agreement is entered into by and between [Party A] and [Party B], collectively referred to as the "Parties".</p>

<blockquote><p>Effective Date: [Insert Date]</p></blockquote>

<h2><strong>1. Purpose</strong></h2>
<p>The purpose of this Agreement is to outline the terms and conditions of the collaboration between the Parties for [describe the specific project or venture].</p>

<h2><strong>2. Scope of Collaboration</strong></h2>
<p>The Parties agree to collaborate on:</p>
<ul>
    <li><p>[List specific areas of collaboration]</p></li>
</ul>

<h2><strong>3. Responsibilities of the Parties</strong></h2>
<p>Party A agrees to:</p>
<ul>
    <li><p>[List responsibilities of Party A]</p></li>
</ul>
<p>Party B agrees to:</p>
<ul>
    <li><p>[List responsibilities of Party B]</p></li>
</ul>

<h2><strong>4. Resource Allocation</strong></h2>
<p>[Describe how resources will be allocated between the Parties]</p>

<h2><strong>5. Intellectual Property</strong></h2>
<p>[Outline how intellectual property created during the collaboration will be handled]</p>

<h2><strong>6. Confidentiality</strong></h2>
<p>[Include confidentiality clause or reference separate NDA]</p>

<h2><strong>7. Term and Termination</strong></h2>
<p>[Specify the duration of the agreement and conditions for termination]</p>

<h2><strong>8. Dispute Resolution</strong></h2>
<p>[Outline the process for resolving disputes]</p>

<h2><strong>9. Governing Law</strong></h2>
<p>This Agreement shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p>

<h2><strong>10. Entire Agreement</strong></h2>
<p>This Agreement constitutes the entire understanding between the Parties with respect to the subject matter hereof.</p>

<h2><strong>IN WITNESS WHEREOF</strong></h2>
<p>The Parties hereto have executed this Collaboration Agreement as of the Effective Date stated above.</p>

<pre><code>[Party A]                   [Party B]
Signature                   Signature
Name                        Name
Title                       Title
Date                        Date</code></pre>
`,
    },
    {
      id: 2,
      name: "Consultancy Agreement",
      content: `<h1><strong>Consultancy Agreement</strong></h1>

<p>This Consultancy Agreement is entered into by and between [Client Name] ("Client") and [Consultant Name] ("Consultant").</p>

<blockquote><p>Effective Date: [Insert Date]</p></blockquote>

<h2><strong>1. Engagement</strong></h2>
<p>The Client hereby engages the Consultant to provide consultancy services as described in this Agreement.</p>

<h2><strong>2. Services</strong></h2>
<p>The Consultant shall provide the following services:</p>
<ul>
    <li><p>[List specific services to be provided]</p></li>
</ul>

<h2><strong>3. Term</strong></h2>
<p>[Specify the duration of the agreement]</p>

<h2><strong>4. Compensation</strong></h2>
<p>[Detail the compensation structure, including rates and payment terms]</p>

<h2><strong>5. Independent Contractor Status</strong></h2>
<p>The Consultant is an independent contractor and not an employee of the Client.</p>

<h2><strong>6. Confidentiality</strong></h2>
<p>[Include confidentiality clause or reference separate NDA]</p>

<h2><strong>7. Intellectual Property</strong></h2>
<p>[Outline ownership of intellectual property created during the consultancy]</p>

<h2><strong>8. Termination</strong></h2>
<p>[Specify conditions under which either party may terminate the agreement]</p>

<h2><strong>9. Limitation of Liability</strong></h2>
<p>[Include any limitations on the Consultant's liability]</p>

<h2><strong>10. Governing Law</strong></h2>
<p>This Agreement shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p>

<h2><strong>11. Entire Agreement</strong></h2>
<p>This Agreement constitutes the entire understanding between the parties with respect to the subject matter hereof.</p>

<h2><strong>IN WITNESS WHEREOF</strong></h2>
<p>The parties hereto have executed this Consultancy Agreement as of the Effective Date stated above.</p>

<pre><code>[Client]                    [Consultant]
Signature                   Signature
Name                        Name
Title                       Title
Date                        Date</code></pre>
`,
    },
    {
      id: 3,
      name: "Employment Contract",
      content: `<h1><strong>Employment Contract</strong></h1>

<p>This Employment Contract is entered into by and between [Employer Name] ("Employer") and [Employee Name] ("Employee").</p>

<blockquote><p>Effective Date: [Insert Date]</p></blockquote>

<h2><strong>1. Position and Duties</strong></h2>
<p>[Describe the employee's position and primary responsibilities]</p>

<h2><strong>2. Term of Employment</strong></h2>
<p>[Specify whether the employment is for a fixed term or indefinite period]</p>

<h2><strong>3. Compensation</strong></h2>
<p>[Detail the employee's salary, bonuses, and other forms of compensation]</p>

<h2><strong>4. Benefits</strong></h2>
<p>[Outline any benefits provided, such as health insurance, retirement plans, etc.]</p>

<h2><strong>5. Work Hours and Location</strong></h2>
<p>[Specify expected work hours and primary work location]</p>

<h2><strong>6. Vacation and Leave</strong></h2>
<p>[Detail vacation time, sick leave, and other types of leave]</p>

<h2><strong>7. Confidentiality and Non-Disclosure</strong></h2>
<p>[Include confidentiality clause or reference separate NDA]</p>

<h2><strong>8. Intellectual Property</strong></h2>
<p>[Outline ownership of intellectual property created during employment]</p>

<h2><strong>9. Termination</strong></h2>
<p>[Specify conditions under which employment may be terminated by either party]</p>

<h2><strong>10. Non-Compete and Non-Solicitation</strong></h2>
<p>[Include any restrictions on post-employment activities]</p>

<h2><strong>11. Governing Law</strong></h2>
<p>This Contract shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p>

<h2><strong>12. Entire Agreement</strong></h2>
<p>This Contract constitutes the entire understanding between the parties with respect to the subject matter hereof.</p>

<h2><strong>IN WITNESS WHEREOF</strong></h2>
<p>The parties hereto have executed this Employment Contract as of the Effective Date stated above.</p>

<pre><code>[Employer]                  [Employee]
Signature                   Signature
Name                        Name
Title                       
Date                        Date</code></pre>
`,
    },
    { id: 4, 
      name: "New Doc",
      content: `<h1><strong>[New Document Title]</strong></h1>

<p>This [Document Type] is entered into by and between [Party A] and [Party B], collectively referred to as the "Parties".</p>

<blockquote><p>Effective Date: [Insert Date]</p></blockquote>

<h2><strong>1. Purpose</strong></h2>
<p>[Describe the main purpose of this document]</p>

<h2><strong>2. Definitions</strong></h2>
<p>For the purpose of this [Document Type], the following terms shall have the meanings specified:</p>
<ul>
    <li><p>"[Term 1]" means [definition].</p></li>
    <li><p>"[Term 2]" means [definition].</p></li>
    <!-- Add more terms as needed -->
</ul>

<h2><strong>3. [Main Section 1]</strong></h2>
<p>[Details of the first main section]</p>

<h2><strong>4. [Main Section 2]</strong></h2>
<p>[Details of the second main section]</p>

<h2><strong>5. [Main Section 3]</strong></h2>
<p>[Details of the third main section]</p>

<!-- Add more sections as needed -->

<h2><strong>6. Confidentiality</strong></h2>
<p>[Include confidentiality clause or reference separate NDA]</p>

<h2><strong>7. Term and Termination</strong></h2>
<p>[Specify the duration of the agreement and conditions for termination]</p>

<h2><strong>8. Governing Law</strong></h2>
<p>This [Document Type] shall be governed by and construed in accordance with the laws of [insert jurisdiction].</p>

<h2><strong>9. Entire Agreement</strong></h2>
<p>This [Document Type] constitutes the entire understanding between the Parties with respect to the subject matter hereof.</p>

<h2><strong>IN WITNESS WHEREOF</strong></h2>
<p>The Parties hereto have executed this [Document Type] as of the Effective Date stated above.</p>

<pre><code>[Party A]                   [Party B]
Signature                   Signature
Name                        Name
Title                       Title
Date                        Date</code></pre>
`
    },
  ],
  selectedTemplate: null,

  chooseTemplate: (id: number) =>
    set((state) => ({
      selectedTemplate:
        state.templates.find((template) => template.id === id) || null,
    })),
}));

export default useTemplateStore;
