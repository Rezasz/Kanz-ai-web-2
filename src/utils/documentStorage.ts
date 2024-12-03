import type { Document } from '../types/document';

const STORAGE_KEY = 'documents';

export const saveDocument = async (title: string, brief: string, file: File): Promise<void> => {
  const documents = getDocuments();
  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  
  // Create a blob URL for the file
  const fileUrl = URL.createObjectURL(file);
  
  const newDocument: Document = {
    id,
    title,
    brief,
    fileName: file.name,
    fileUrl,
    uploadDate: timestamp,
    uploadedBy: 'admin'
  };
  
  documents.push(newDocument);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
};

export const getDocuments = (): Document[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const deleteDocument = (id: string): void => {
  const documents = getDocuments().filter(doc => doc.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
  
  // Clean up the blob URL
  const doc = getDocuments().find(d => d.id === id);
  if (doc?.fileUrl) {
    URL.revokeObjectURL(doc.fileUrl);
  }
};