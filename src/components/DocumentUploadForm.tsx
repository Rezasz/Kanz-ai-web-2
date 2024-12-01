import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface DocumentUploadFormProps {
  onUpload: (title: string, brief: string, file: File) => Promise<void>;
  isUploading: boolean;
}

const DocumentUploadForm: React.FC<DocumentUploadFormProps> = ({ onUpload, isUploading }) => {
  const [title, setTitle] = useState('');
  const [brief, setBrief] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !title || !brief) return;
    await onUpload(title, brief, file);
    setTitle('');
    setBrief('');
    setFile(null);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Upload New Document</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Brief Description</label>
          <textarea
            value={brief}
            onChange={(e) => setBrief(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            rows={3}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">PDF File</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => e.target.files && setFile(e.target.files[0])}
            className="mt-1 block w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={isUploading}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Upload className="h-4 w-4 mr-2" />
          {isUploading ? 'Uploading...' : 'Upload Document'}
        </button>
      </div>
    </form>
  );
};

export default DocumentUploadForm;