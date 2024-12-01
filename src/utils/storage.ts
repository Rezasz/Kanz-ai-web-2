import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase';
import type { Document } from '../types/document';

export const uploadDocument = async (title: string, brief: string, file: File) => {
  const fileName = `${title}__${brief}__${new Date().toISOString()}__admin`;
  const storageRef = ref(storage, `documents/${fileName}`);
  await uploadBytes(storageRef, file);
};

export const fetchDocuments = async (): Promise<Document[]> => {
  const storageRef = ref(storage, 'documents');
  const result = await listAll(storageRef);
  
  const docs = await Promise.all(
    result.items.map(async (item) => {
      const url = await getDownloadURL(item);
      const metadata = item.name.split('__');
      return {
        id: item.name,
        title: metadata[0],
        brief: metadata[1],
        pdfUrl: url,
        uploadDate: metadata[2],
        uploadedBy: metadata[3]
      };
    })
  );
  
  return docs;
};

export const deleteDocument = async (docId: string) => {
  const docRef = ref(storage, `documents/${docId}`);
  await deleteObject(docRef);
};