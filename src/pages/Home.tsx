import React from 'react';
import { ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditableContent from '../components/EditableContent';
import SEO from '../components/SEO';

const Home = () => {
  const handleTryFree = () => {
    window.open('https://91.107.255.176:8080/', '_blank');
  };

  return (
    <>
      <SEO 
        title="AI-Powered Document Management"
        description="Kanz.ai is your trusted partner for AI-driven document management, built for the complexities of the financial industry."
        canonical="/"
      />
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
            <div className="max-w-3xl">
              <EditableContent
                id="home-hero-title"
                defaultContent="Transform Your Document Management with AI"
                type="heading"
              />
              <EditableContent
                id="home-hero-description"
                defaultContent="Kanz.ai is your trusted partner for AI-driven document management, built for the complexities of the financial industry."
                type="paragraph"
              />
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleTryFree}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-colors"
                >
                  <EditableContent
                    id="home-hero-cta"
                    defaultContent="Get Started"
                  />
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <Link
                  to="/how-it-works"
                  className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
                >
                  <EditableContent
                    id="home-hero-secondary-cta"
                    defaultContent="Learn More"
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <EditableContent
                id="home-features-title"
                defaultContent="Why Choose Kanz.ai?"
                type="heading"
              />
              <EditableContent
                id="home-features-description"
                defaultContent="Experience the power of AI-driven document management designed specifically for financial institutions."
                type="paragraph"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Brain className="h-12 w-12 text-blue-600 mb-4" />
                <EditableContent
                  id="home-feature-1-title"
                  defaultContent="AI-Powered Automation"
                  type="heading"
                />
                <EditableContent
                  id="home-feature-1-description"
                  defaultContent="Automate document classification, tagging, and retrieval with advanced machine learning algorithms."
                  type="paragraph"
                />
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <EditableContent
                  id="home-feature-2-title"
                  defaultContent="Secure & Scalable"
                  type="heading"
                />
                <EditableContent
                  id="home-feature-2-description"
                  defaultContent="Built with Go and ReactJS for performance and security, scaling effortlessly with your enterprise needs."
                  type="paragraph"
                />
              </div>

              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <EditableContent
                  id="home-feature-3-title"
                  defaultContent="Custom Integrations"
                  type="heading"
                />
                <EditableContent
                  id="home-feature-3-description"
                  defaultContent="Seamlessly integrate with MinIO, IRIS OCR SDK, and Pydio for a complete document management solution."
                  type="paragraph"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <EditableContent
              id="home-cta-title"
              defaultContent="Ready to Transform Your Document Management?"
              type="heading"
            />
            <EditableContent
              id="home-cta-description"
              defaultContent="Join leading financial institutions who trust Kanz.ai for their document management needs."
              type="paragraph"
            />
            <button
              onClick={handleTryFree}
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              <EditableContent
                id="home-cta-button"
                defaultContent="Start Free Trial"
              />
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;