export const defaultValue = {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: { level: 1 },
        content: [{ type: "text", text: "Non-Disclosure Agreement" }]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "This Non-Disclosure Agreement (hereinafter referred to as the \"" },
          { type: "text", text: "Agreement", marks: [{ type: "bold" }] },
          { type: "text", text: "\") is entered into on this " },
          { type: "text", text: "[DAY]", marks: [{ type: "link" }] },
          { type: "text", text: " day of " },
          { type: "text", text: "[MONTH]", marks: [{ type: "link" }] },
          { type: "text", text: ", " },
          { type: "text", text: "[YEAR]", marks: [{ type: "link" }] },
          { type: "text", text: " (the \"" },
          { type: "text", text: "Effective Date", marks: [{ type: "italic" }] },
          { type: "text", text: "\"), by and between:" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "1. " },
          { type: "text", text: "[PARTY A NAME]", marks: [{ type: "link" }] },
          { type: "text", text: ", a company organized and existing under the laws of " },
          { type: "text", text: "[JURISDICTION]", marks: [{ type: "link" }] },
          { type: "text", text: ", with its principal place of business at " },
          { type: "text", text: "[ADDRESS]", marks: [{ type: "link" }] },
          { type: "text", text: " (hereinafter referred to as \"" },
          { type: "text", text: "Party A", marks: [{ type: "bold" }] },
          { type: "text", text: "\"); and" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "2. " },
          { type: "text", text: "[PARTY B NAME]", marks: [{ type: "link" }] },
          { type: "text", text: ", a company organized and existing under the laws of " },
          { type: "text", text: "[JURISDICTION]", marks: [{ type: "link" }] },
          { type: "text", text: ", with its principal place of business at " },
          { type: "text", text: "[ADDRESS]", marks: [{ type: "link" }] },
          { type: "text", text: " (hereinafter referred to as \"" },
          { type: "text", text: "Party B", marks: [{ type: "bold" }] },
          { type: "text", text: "\")." }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Party A and Party B are hereinafter collectively referred to as the \"" },
          { type: "text", text: "Parties", marks: [{ type: "bold" }] },
          { type: "text", text: "\" and individually as a \"" },
          { type: "text", text: "Party", marks: [{ type: "bold" }] },
          { type: "text", text: "\"." }
        ]
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "WHEREAS:" }]
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "The Parties wish to explore a potential business relationship (the \"" },
                  { type: "text", text: "Purpose", marks: [{ type: "italic" }] },
                  { type: "text", text: "\");" }
                ]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "In connection with the Purpose, each Party may disclose to the other Party certain confidential and proprietary information;" }
                ]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  { type: "text", text: "The Parties wish to protect such confidential and proprietary information from unauthorized disclosure and use." }
                ]
              }
            ]
          }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, the Parties agree as follows:" }
        ]
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "1. Definition of Confidential Information" }]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For purposes of this Agreement, \"" },
          { type: "text", text: "Confidential Information", marks: [{ type: "bold" }] },
          { type: "text", text: "\" means any and all non-public, confidential or proprietary information disclosed by one Party (the \"" },
          { type: "text", text: "Disclosing Party", marks: [{ type: "italic" }] },
          { type: "text", text: "\") to the other Party (the \"" },
          { type: "text", text: "Receiving Party", marks: [{ type: "italic" }] },
          { type: "text", text: "\"), whether orally, in writing, or in any other form or medium, including but not limited to:" }
        ]
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Trade secrets and proprietary information;" }]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Business plans, strategies, and methods;" }]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Financial information and projections;" }]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Customer and supplier lists and information;" }]
              }
            ]
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [{ type: "text", text: "Technical data, know-how, and inventions." }]
              }
            ]
          }
        ]
      },
      {
        type: "paragraph",
        content: [{ type: "text", text: "..." }]
      },
      {
        type: "heading",
        attrs: { level: 2 },
        content: [{ type: "text", text: "IN WITNESS WHEREOF," }]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "the Parties hereto have executed this Non-Disclosure Agreement as of the Effective Date." }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For and on behalf of " },
          { type: "text", text: "Party A", marks: [{ type: "bold" }] },
          { type: "text", text: ":" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Signature: ", marks: [{ type: "italic" }] },
          { type: "text", text: "________________________" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Name: ", marks: [{ type: "italic" }] },
          { type: "text", text: "[AUTHORIZED SIGNATORY NAME]", marks: [{ type: "link" }] }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Title: ", marks: [{ type: "italic" }] },
          { type: "text", text: "[TITLE]", marks: [{ type: "link" }] }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "For and on behalf of " },
          { type: "text", text: "Party B", marks: [{ type: "bold" }] },
          { type: "text", text: ":" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Signature: ", marks: [{ type: "italic" }] },
          { type: "text", text: "________________________" }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Name: ", marks: [{ type: "italic" }] },
          { type: "text", text: "[AUTHORIZED SIGNATORY NAME]", marks: [{ type: "link" }] }
        ]
      },
      {
        type: "paragraph",
        content: [
          { type: "text", text: "Title: ", marks: [{ type: "link" }] },
          { type: "text", text: "[TITLE]", marks: [{ type: "link" }] }
        ]
      }
    ]
  };
  