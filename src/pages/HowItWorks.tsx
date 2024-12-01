import React from 'react';
import { Link } from 'react-router-dom';
import {
  Database, Brain, Zap, Shield, Scale, ArrowRightCircle,
  Settings, RefreshCcw, Lock, MessageSquare, FileText, Users
} from 'lucide-react';
import EditableContent from '../components/EditableContent';
import ProcessStep from '../components/ProcessStep';
import DataFlowDiagram from '../components/DataFlowDiagram';
import TechnologyStack from '../components/TechnologyStack';
import FeatureHighlight from '../components/FeatureHighlight';

const HowItWorks = () => {
  const steps = [
    {
      icon: Database,
      title: 'Data Collection and Integration',
      description: 'We collect and integrate data from diverse sources, including customer interactions, transactional records, and external databases, ensuring accurate and relevant analysis.'
    },
    {
      icon: Brain,
      title: 'AI Model Training and Deployment',
      description: 'Our state-of-the-art machine learning algorithms train on curated datasets, enabling pattern recognition and informed predictions that continuously improve over time.'
    },
    {
      icon: Zap,
      title: 'Real-Time Processing and Analysis',
      description: 'Our infrastructure handles real-time data processing for immediate analysis and response, crucial for applications like AI-powered chatbots.'
    },
    {
      icon: RefreshCcw,
      title: 'User Interaction and Feedback Loop',
      description: 'The platform facilitates seamless interaction between users and AI-driven applications, incorporating feedback to continually refine and improve our AI models.'
    },
    {
      icon: Shield,
      title: 'Security and Compliance',
      description: 'We employ robust encryption protocols and adhere to industry standards, ensuring data security and regulatory compliance.'
    },
    {
      icon: Scale,
      title: 'Scalability and Integration',
      description: 'Built with scalability in mind, our modular architecture supports easy integration with existing systems and third-party applications.'
    }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'KanzEngage Chatbot',
      description: 'AI-powered chatbot solution for enhanced customer engagement',
      benefits: [
        'Natural language understanding',
        'Multi-language support',
        '24/7 availability',
        'Seamless CRM integration'
      ]
    },
    {
      icon: FileText,
      title: 'SecureVault',
      description: 'Advanced document management and storage system',
      benefits: [
        'OCR capabilities',
        'Automated classification',
        'Version control',
        'Secure storage'
      ]
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Comprehensive user access and control system',
      benefits: [
        'Role-based access',
        'Activity monitoring',
        'Audit trails',
        'Custom permissions'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <EditableContent
              id="how-it-works-hero-title"
              defaultContent="How Kanz.ai Works"
              type="heading"
            />
            <EditableContent
              id="how-it-works-hero-description"
              defaultContent="Discover the powerful technology behind our AI-driven solutions"
              type="paragraph"
            />
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Technology Stack</h2>
          <TechnologyStack />
        </div>
      </section>

      {/* Data Flow Diagram */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Data Processing Flow</h2>
          <DataFlowDiagram />
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">How It All Works Together</h2>
          <div className="max-w-3xl mx-auto">
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === steps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureHighlight
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                benefits={feature.benefits}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Enterprise-Grade Security</h2>
            <p className="text-xl text-gray-600">Your data is protected by industry-leading security measures</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lock className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Encryption</h3>
              <p className="text-gray-600">End-to-end encryption for all sensitive information</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compliance</h3>
              <p className="text-gray-600">Adherence to global security standards and regulations</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Settings className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Access Control</h3>
              <p className="text-gray-600">Granular control over user permissions and access</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Experience the power of AI-driven solutions for your business</p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
          >
            Start Free Trial
            <ArrowRightCircle className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;