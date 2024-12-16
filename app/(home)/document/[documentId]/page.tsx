import DocViewerConqr from "@/components/documents/DocViewerConqr"
import { document } from '@/data/document';
type params={
    documentId:string
    }

export default function page({ params }:{params:params}) {
    const fileKey = params.documentId
    function getDocumentTitle(fileKey:string) {
        for (const category of document) {
            for (const doc of category.documentlist) {
                if (doc.file_key === fileKey) {
                    return doc.title;
                }
            }
        }
        return null; 
    }
    const title = getDocumentTitle(fileKey);
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg mx-auto  ">
      <DocViewerConqr
        title={title}
        url={`https://utfs.io/f/${params.documentId}`}
      />
      
    </div>
  )
}
