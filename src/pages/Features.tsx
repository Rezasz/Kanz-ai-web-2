import React from 'react';
import { 
  Brain, Shield, Zap, Search, Workflow, Globe, 
  MessageSquare, Wrench, FileBox, Network, Building,
  Users, Lock, Cloud, Headphones, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EditableContent from '../components/EditableContent';
import SEO from '../components/SEO';

const Features = () => {
  const mainFeatures = [
    {
      id: 'kanzengage',
      icon: MessageSquare,
      title: 'KanzEngage: AI-Powered Chatbot Solutions',
      description: 'Revolutionize customer interaction with intelligent chatbots capable of understanding and responding to user inquiries in real-time.',
      benefits: [
        'Multilingual Support for diverse customer base',
        '24/7 Availability for round-the-clock support',
        'Seamless CRM Integration for personalized interactions'
      ]
    },
    {
      id: 'kanzcraft',
      icon: Wrench,
      title: 'KanzCraft: Intelligent DIY Project Assistant',
      description: 'Assist users in planning and executing DIY projects with comprehensive procurement lists and budget estimates.',
      benefits: [
        'Detailed project planning and management',
        'Accurate budget forecasting',
        'Integrated vendor partnerships'
      ]
    },
    {
      id: 'securevault',
      icon: FileBox,
      title: 'SecureVault: Advanced Content Service Platform',
      description: 'Robust document management solution emphasizing security and accessibility.',
      benefits: [
        'Advanced OCR document digitization',
        'Powerful metadata search capabilities',
        'Automated document workflows'
      ]
    },
    {
      id: 'ai-models',
      icon: Brain,
      title: 'AI Model Integration',
      description: 'State-of-the-art AI models including G42 Jais 70B for enhanced intelligence and responsiveness.',
      benefits: [
        'Sophisticated natural language processing',
        'Advanced predictive analytics',
        'Intelligent data analysis'
      ]
    },
    {
      id: 'integrations',
      icon: Network,
      title: 'Seamless Integrations',
      description: 'Harmonious integration with third-party tools and APIs including Alfresco, MinIO, and SolR.',
      benefits: [
        'Enhanced document management with Alfresco',
        'Scalable storage with MinIO',
        'Powerful search with SolR'
      ]
    },
    {
      id: 'industry',
      icon: Building,
      title: 'Industry-Specific Solutions',
      description: 'Tailored solutions for banking, insurance, and fintech sectors.',
      benefits: [
        'Enhanced loan origination processes',
        'Streamlined claims processing',
        'Optimized financial operations'
      ]
    },
    {
      id: 'interface',
      icon: Users,
      title: 'User-Friendly Interface',
      description: 'Intuitive interface designed for ease of use with minimal training requirements.',
      benefits: [
        'Comprehensive dashboard overview',
        'Customizable interface options',
        'Streamlined workflow management'
      ]
    },
    {
      id: 'security',
      icon: Lock,
      title: 'Security and Compliance',
      description: 'Priority focus on data security and regulatory compliance.',
      benefits: [
        'Advanced data encryption',
        'Regulatory compliance adherence',
        'Secure data handling'
      ]
    },
    {
      id: 'scalability',
      icon: Cloud,
      title: 'Scalability',
      description: 'Solutions designed to grow with your business needs.',
      benefits: [
        'Flexible cloud infrastructure',
        'Efficient resource management',
        'Performance optimization'
      ]
    },
    {
      id: 'support',
      icon: Headphones,
      title: 'Customer Support',
      description: 'Comprehensive support system to maximize platform benefits.',
      benefits: [
        'Detailed training programs',
        'Prompt technical assistance',
        'Ongoing support services'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Features"
        description="Explore Kanz.ai's comprehensive suite of AI-driven document management features designed for modern enterprises."
        canonical="/features"
      />
      <div>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <EditableContent
                id="features-hero-title"
                defaultContent="Transforming Business with AI-Driven Solutions"
                type="heading"
              />
              <EditableContent
                id="features-hero-description"
                defaultContent="Kanz.ai is at the forefront of digital transformation, offering a suite of AI-driven solutions tailored to enhance operational efficiency and customer engagement across various industries. Our platform seamlessly integrates with existing systems, providing scalable and secure services that drive innovation and growth."
                type="paragraph"
              />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature) => (
                <div key={feature.id} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <ChevronRight className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
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
              id="features-cta-title"
              defaultContent="Ready to Transform Your Business?"
              type="heading"
            />
            <EditableContent
              id="features-cta-description"
              defaultContent="Contact us to learn how Kanz.ai's comprehensive features can benefit your organization"
              type="paragraph"
            />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Request Demo
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Features;