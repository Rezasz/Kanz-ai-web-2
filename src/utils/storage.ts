import { ref, uploadBytes, getDownloadURL, listAll, deleteObject } from 'firebase/storage';
import { storage } from '../config/firebase';
import type { Document } from '../types/document';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const retry = async <T>(
  operation: () => Promise<T>,
  retries = MAX_RETRIES,
  delay = RETRY_DELAY
): Promise<T> => {
  try {
    return await operation();
  } catch (error) {
    if (retries > 0) {
      await sleep(delay);
      return retry(operation, retries - 1, delay * 2);
    }
    throw error;
  }
};

export const uploadDocument = async (title: string, brief: string, file: File): Promise<void> => {
  const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_]/g, '_');
  const timestamp = new Date().toISOString();
  const fileName = `${sanitizedTitle}__${timestamp}__admin.pdf`;
  const storageRef = ref(storage, `documents/${fileName}`);
  
  const metadata = {
    customMetadata: {
      title,
      brief,
      uploadDate: timestamp,
      uploadedBy: 'admin'
    }
  };

  await retry(() => uploadBytes(storageRef, file, metadata));
};

export const fetchDocuments = async (): Promise<Document[]> => {
  const storageRef = ref(storage, 'documents');
  
  const result = await retry(() => listAll(storageRef));
  
  const docs = await Promise.all(
    result.items.map(async (item) => {
      const url = await retry(() => getDownloadURL(item));
      const [fileName] = item.name.split('__');
      const metadata = await retry(() => item.getMetadata());
      
      return {
        id: item.name,
        title: metadata.customMetadata?.title || fileName,
        brief: metadata.customMetadata?.brief || '',
        pdfUrl: url,
        uploadDate: metadata.customMetadata?.uploadDate || metadata.timeCreated,
        uploadedBy: metadata.customMetadata?.uploadedBy || 'admin'
      };
    })
  );
  
  return docs.sort((a, b) => 
    new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime()
  );
};

export const deleteDocument = async (docId: string): Promise<void> => {
  const docRef = ref(storage, `documents/${docId}`);
  await retry(() => deleteObject(docRef));
};