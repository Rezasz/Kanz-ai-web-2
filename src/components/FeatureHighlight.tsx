import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureHighlightProps {
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon: Icon, title, description, benefits }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <Icon className="h-12 w-12 text-blue-600 mb-4" />
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
            <span className="text-gray-700">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureHighlight;