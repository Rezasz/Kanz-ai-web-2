import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon: Icon, title, description, isLast }) => {
  return (
    <div className="relative flex items-start">
      <div className="flex h-16 items-center">
        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white">
          <Icon className="h-6 w-6" />
        </div>
        {!isLast && (
          <div className="absolute top-12 left-6 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true" />
        )}
      </div>
      <div className="ml-6 pb-8">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;