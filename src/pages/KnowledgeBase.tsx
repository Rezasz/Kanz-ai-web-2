import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoginPrompt from '../components/knowledge-base/LoginPrompt';
import DocumentList from '../components/knowledge-base/DocumentList';
import DocumentUpload from '../components/knowledge-base/DocumentUpload';
import { saveDocument, getDocuments } from '../utils/documentStorage';
import type { Document } from '../types/document';

const KnowledgeBase = () => {
  const { isAuthenticated } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    setDocuments(getDocuments());
  }, []);

  const handleUpload = async (title: string, brief: string, file: File) => {
    setIsUploading(true);
    try {
      await saveDocument(title, brief, file);
      setDocuments(getDocuments());
    } catch (error) {
      console.error('Error uploading document:', error);
    } finally {
      setIsUploading(false);
    }
  };

  if (!isAuthenticated) {
    return <LoginPrompt />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Knowledge Base</h1>
        
        {isAuthenticated && (
          <DocumentUpload 
            onUpload={handleUpload}
            isUploading={isUploading}
          />
        )}
        
        <DocumentList documents={documents} />
      </div>
    </div>
  );
};

export default KnowledgeBase;