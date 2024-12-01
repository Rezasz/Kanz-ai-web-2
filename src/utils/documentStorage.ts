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
    uploadDate: timestamp,
    uploadedBy: 'admin'
  };

  // Store the blob URL in sessionStorage to persist across page reloads
  sessionStorage.setItem(`file_${id}`, fileUrl);
  
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
  const fileUrl = sessionStorage.getItem(`file_${id}`);
  if (fileUrl) {
    URL.revokeObjectURL(fileUrl);
    sessionStorage.removeItem(`file_${id}`);
  }
};

export const getDocumentUrl = (id: string): string | null => {
  return sessionStorage.getItem(`file_${id}`);
};