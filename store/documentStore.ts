import {create} from 'zustand';
import { persist,createJSONStorage } from 'zustand/middleware';
import { document } from '@/data/document';

type Document = {
  title: string;
  Type: string;
  created_on: string;
  created_by: string;
  user_color: string;
  file_key: string;
};


type DocumentGroup = {
  type: 'Created documents'|'Pending Approval'|'Shared documents'|'Pending Signature';
  bgcolor: string;
  documentlist: Document[];
};


interface DocumentState {
  documents: DocumentGroup[];
  addDocument: (groupIndex: number, document: Document) => void;
  deleteDocument: (groupIndex: number, documentIndex: number) => void;
  editDocument: (groupIndex: number, documentIndex: number, updatedDocument: Document) => void;
  addGroup: (group: DocumentGroup) => void;
  deleteGroup: (groupIndex: number) => void;
}


export const useDocumentStore = create<DocumentState>()(
  persist(
    (set) => ({
      documents: document, 
      addDocument: (groupIndex, document) =>
        set((state) => {
          const newDocuments = [...state.documents];
          newDocuments[groupIndex].documentlist.push(document);
          return { documents: newDocuments };
        }),
      deleteDocument: (groupIndex, documentIndex) =>
        set((state) => {
          const newDocuments = [...state.documents];
          newDocuments[groupIndex].documentlist.splice(documentIndex, 1);
          return { documents: newDocuments };
        }),
      editDocument: (groupIndex, documentIndex, updatedDocument) =>
        set((state) => {
          const newDocuments = [...state.documents];
          newDocuments[groupIndex].documentlist[documentIndex] = updatedDocument;
          return { documents: newDocuments };
        }),
      addGroup: (group) =>
        set((state) => ({
          documents: [...state.documents, group],
        })),
      deleteGroup: (groupIndex) =>
        set((state) => {
          const newDocuments = [...state.documents];
          newDocuments.splice(groupIndex, 1);
          return { documents: newDocuments };
        }),
    }),
    {
      name: 'document-storage', 
      storage: createJSONStorage(() => localStorage), 
    }
  )
);
