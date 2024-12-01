import React from 'react';
import { Code2, Database, Cloud, Network } from 'lucide-react';

const TechnologyStack = () => {
  const technologies = [
    {
      icon: Code2,
      title: 'Advanced AI Models',
      description: 'Powered by G42 Jais 70B and cutting-edge machine learning algorithms'
    },
    {
      icon: Database,
      title: 'Robust Infrastructure',
      description: 'Built on scalable architecture with MinIO and SolR integration'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Designed for optimal performance in cloud environments'
    },
    {
      icon: Network,
      title: 'API Integration',
      description: 'RESTful APIs for seamless third-party integration'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
          <tech.icon className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
          <p className="text-gray-600 text-sm">{tech.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnologyStack;