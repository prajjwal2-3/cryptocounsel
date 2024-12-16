export const FormatSummary = (result: string) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(result, "text/xml");
  
    const formatSection = (sectionName: string, content: JSX.Element) => {
      return (
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-3 text-blue-600">{sectionName}</h2>
          <div className="pl-4 border-l-4 border-blue-200">
            {content}
          </div>
        </div>
      );
    };
  
    const formatItem = (item: Element) => {
      const content = item.querySelector('content')?.textContent;
      const description = item.querySelector('description')?.textContent;
  
      return (
        <div className="mb-4">
          <p className="font-semibold">{content}</p>
          <p className="mt-2">{description}</p>
        </div>
      );
    };
  
    const formatItems = (sectionName: string, items: NodeListOf<Element>) => {
      return formatSection(sectionName, 
        <div>
          {Array.from(items).map((item, index) => (
            <div key={index}>{formatItem(item)}</div>
          ))}
        </div>
      );
    };
  
    return (
      <div className="legal-document-summary">
        {formatSection("Basic Summary", 
          <p>{xmlDoc.querySelector('basic_summary')?.textContent}</p>
        )}
  
        {formatItems("Key Commercial Terms", xmlDoc.querySelectorAll('key_commercial_terms > term'))}
  
        {formatItems("Mutual Rights", xmlDoc.querySelectorAll('mutual_rights > right'))}
  
        {formatItems("Independent Rights and Obligations", xmlDoc.querySelectorAll('independent_rights_and_obligations > right_obligation'))}
      </div>
    );
  };