import DocViewerConqr from "@/components/documents/DocViewerConqr"
import { document } from '@/data/document';

export default async function page({ params }:{params:Promise<{slug: string}>}) {
    const fileKey = (await params).slug
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
        url={`https://utfs.io/f/${fileKey}`}
      />
      
    </div>
  )
}
