import React from 'react';
import { Building2, FileText, Briefcase, Scale } from 'lucide-react';
import EditableContent from '../components/EditableContent';

const UseCases = () => {
  const cases = [
    {
      id: 1,
      icon: Building2,
      title: 'Banking & Finance',
      description: 'Streamline document processing for loan applications, KYC procedures, and financial reports.',
      benefits: [
        'Faster loan processing',
        'Automated compliance checks',
        'Reduced manual errors',
      ],
    },
    {
      id: 2,
      icon: Scale,
      title: 'Legal Services',
      description: 'Efficiently manage contracts, legal documents, and case files with AI-powered organization.',
      benefits: [
        'Quick document retrieval',
        'Automated document classification',
        'Enhanced security',
      ],
    },
    {
      id: 3,
      icon: Briefcase,
      title: 'Insurance',
      description: 'Process claims faster and manage policy documents more efficiently.',
      benefits: [
        'Faster claims processing',
        'Automated policy management',
        'Improved customer service',
      ],
    },
    {
      id: 4,
      icon: FileText,
      title: 'Government',
      description: 'Modernize document handling for public services and administrative processes.',
      benefits: [
        'Streamlined workflows',
        'Enhanced transparency',
        'Better public service',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditableContent
              id="use-cases-hero-title"
              defaultContent="Use Cases"
              type="heading"
            />
            <EditableContent
              id="use-cases-hero-description"
              defaultContent="Discover how different industries benefit from Kanz.ai"
              type="paragraph"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((case_) => (
              <div key={case_.id} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <case_.icon className="h-6 w-6" />
                </div>
                <EditableContent
                  id={`use-case-${case_.id}-title`}
                  defaultContent={case_.title}
                  type="heading"
                />
                <EditableContent
                  id={`use-case-${case_.id}-description`}
                  defaultContent={case_.description}
                  type="paragraph"
                />
                <ul className="space-y-2">
                  {case_.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-gray-600">
                      <span className="inline-block w-2 h-2 bg-blue-600 rounded-full mt-2 mr-2"></span>
                      <EditableContent
                        id={`use-case-${case_.id}-benefit-${index}`}
                        defaultContent={benefit}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <EditableContent
            id="use-cases-cta-title"
            defaultContent="Find Your Industry Solution"
            type="heading"
          />
          <EditableContent
            id="use-cases-cta-description"
            defaultContent="Contact us to learn how Kanz.ai can be tailored to your specific needs"
            type="paragraph"
          />
          <button className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            <EditableContent
              id="use-cases-cta-button"
              defaultContent="Contact Sales"
            />
          </button>
        </div>
      </section>
    </div>
  );
};

export default UseCases;