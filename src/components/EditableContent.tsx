import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Save, Edit2, X } from 'lucide-react';

interface EditableContentProps {
  id: string;
  defaultContent: string;
  type?: 'text' | 'heading' | 'paragraph';
  className?: string;
}

const EditableContent: React.FC<EditableContentProps> = ({ id, defaultContent, type = 'text', className = '' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [content, setContent] = useState(defaultContent);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const savedContent = localStorage.getItem(`content_${id}`);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [id]);

  const handleSave = () => {
    localStorage.setItem(`content_${id}`, content);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setContent(localStorage.getItem(`content_${id}`) || defaultContent);
    setIsEditing(false);
  };

  if (!isEditing) {
    const editButton = isAuthenticated && (
      <div
        onClick={() => setIsEditing(true)}
        className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
      >
        <Edit2 className="h-4 w-4 text-blue-600" />
      </div>
    );

    if (type === 'heading') {
      return (
        <div className="group relative">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{content}</h1>
          {editButton}
        </div>
      );
    }

    if (type === 'paragraph') {
      return (
        <div className="group relative">
          <p className="text-xl opacity-90">{content}</p>
          {editButton}
        </div>
      );
    }

    return (
      <div className="group relative inline-block">
        <span className={className}>{content}</span>
        {editButton}
      </div>
    );
  }

  return (
    <div className="flex items-start gap-2">
      {type === 'paragraph' ? (
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md"
          rows={4}
        />
      ) : (
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      )}
      <button
        onClick={handleSave}
        className="p-2 text-green-600 hover:text-green-700"
        type="button"
      >
        <Save className="h-4 w-4" />
      </button>
      <button
        onClick={handleCancel}
        className="p-2 text-red-600 hover:text-red-700"
        type="button"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};

export default EditableContent;