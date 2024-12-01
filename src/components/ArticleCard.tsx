import React, { useState } from 'react';
import { Calendar, User, ChevronDown, ChevronUp } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  content: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  excerpt,
  date,
  author,
  image,
  content
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <User className="h-4 w-4 ml-4 mr-1" />
          <span>{author}</span>
        </div>
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-flex items-center text-blue-600 hover:text-blue-700"
        >
          {isExpanded ? 'Show Less' : 'Read More'}
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 ml-1" />
          ) : (
            <ChevronDown className="h-4 w-4 ml-1" />
          )}
        </button>
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <ReactMarkdown className="prose max-w-none">
              {content}
            </ReactMarkdown>
          </div>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;