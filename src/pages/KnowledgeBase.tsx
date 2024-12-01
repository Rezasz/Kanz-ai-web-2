import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Search } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import DocumentUploadForm from '../components/DocumentUploadForm';
import DocumentList from '../components/DocumentList';
import { saveDocument, getDocuments, deleteDocument } from '../utils/documentStorage';
import type { Document } from '../types/document';

const KnowledgeBase = () => {
  const { isAuthenticated } = useAuth();
  const [documents, setDocuments] = useState<Document[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadDocuments();
  }, []);

  const loadDocuments = () => {
    const docs = getDocuments();
    setDocuments(docs);
  };

  const handleUpload = async (title: string, brief: string, file: File) => {
    setIsUploading(true);
    try {
      await saveDocument(title, brief, file);
      loadDocuments();
      toast.success('Document uploaded successfully!');
    } catch (error) {
      console.error('Error uploading document:', error);
      toast.error('Failed to upload document. Please try again.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (docId: string) => {
    const confirmed = window.confirm('Are you sure you want to delete this document?');
    if (!confirmed) return;

    try {
      deleteDocument(docId);
      loadDocuments();
      toast.success('Document deleted successfully!');
    } catch (error) {
      console.error('Error deleting document:', error);
      toast.error('Failed to delete document. Please try again.');
    }
  };

  const filteredDocuments = documents.filter(doc =>
    doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    doc.brief.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <Toaster position="top-right" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Document Repository</h1>
            <p className="text-xl opacity-90">Access and manage our collection of documents and resources</p>
          </div>
        </div>
      </section>

      {/* Upload Form - Only visible when authenticated */}
      {isAuthenticated && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <DocumentUploadForm onUpload={handleUpload} isUploading={isUploading} />
          </div>
        </section>
      )}

      {/* Search Section */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full md:w-96 mx-auto">
            <input
              type="text"
              placeholder="Search documents..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </section>

      {/* Documents List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DocumentList
            documents={filteredDocuments}
            isAuthenticated={isAuthenticated}
            onDelete={handleDelete}
          />
        </div>
      </section>
    </div>
  );
};

export default KnowledgeBase;