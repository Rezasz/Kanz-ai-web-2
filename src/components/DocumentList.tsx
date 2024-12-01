import React from 'react';
import { Download, Trash2, FileText } from 'lucide-react';
import type { Document } from '../types/document';

interface DocumentListProps {
  documents: Document[];
  isAuthenticated: boolean;
  onDelete: (docId: string) => Promise<void>;
}

const DocumentList: React.FC<DocumentListProps> = ({ documents, isAuthenticated, onDelete }) => {
  if (documents.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
        <p className="mt-1 text-sm text-gray-500">
          Upload some documents to get started
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {documents.map((doc) => (
        <div key={doc.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
              <p className="text-gray-600 mb-4">{doc.brief}</p>
              <p className="text-sm text-gray-500">
                Uploaded on {new Date(doc.uploadDate).toLocaleDateString()}
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={doc.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                <Download className="h-5 w-5" />
              </a>
              {isAuthenticated && (
                <button
                  onClick={() => onDelete(doc.id)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;