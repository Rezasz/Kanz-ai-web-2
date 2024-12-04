import React from 'react';
import { Users, Target, Award, ChevronRight, UserCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import EditableContent from '../components/EditableContent';
import SEO from '../components/SEO';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Reza Al Zamani',
      role: 'CEO & Founder',
    },
    {
      id: 2,
      name: 'Mohsen Azizi',
      role: 'CTO',
    },
    {
      id: 3,
      name: 'Sasan Shirdel',
      role: 'Head of AI',
    },
  ];

  return (
    <>
      <SEO 
        title="About Us"
        description="Learn about Kanz.ai's mission to revolutionize document management in the financial industry through the power of artificial intelligence."
        canonical="/about"
      />
      <div>
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <EditableContent
                id="about-hero-title"
                defaultContent="About Kanz.ai"
                type="heading"
              />
              <EditableContent
                id="about-hero-description"
                defaultContent="We're on a mission to revolutionize document management in the financial industry through the power of artificial intelligence."
                type="paragraph"
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <Target className="h-6 w-6" />
                </div>
                <EditableContent
                  id="about-mission-title"
                  defaultContent="Our Mission"
                  type="heading"
                />
                <EditableContent
                  id="about-mission-description"
                  defaultContent="To transform document management, making it smarter, faster, and more secure for enterprises worldwide. We believe in empowering organizations to focus on high-value tasks while we handle the complexities of document processing and storage."
                  type="paragraph"
                />
              </div>
              <div className="space-y-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <EditableContent
                  id="about-vision-title"
                  defaultContent="Our Vision"
                  type="heading"
                />
                <EditableContent
                  id="about-vision-description"
                  defaultContent="We envision a world where financial institutions operate with unprecedented efficiency using AI-driven tools that automate document-heavy processes, improving compliance, reducing manual errors, and ensuring better decision-making."
                  type="paragraph"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <EditableContent
                id="about-values-title"
                defaultContent="Our Values"
                type="heading"
              />
              <EditableContent
                id="about-values-description"
                defaultContent="These core values guide everything we do at Kanz.ai"
                type="paragraph"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <EditableContent
                  id="about-value-1-title"
                  defaultContent="Innovation"
                  type="heading"
                />
                <EditableContent
                  id="about-value-1-description"
                  defaultContent="We constantly push the boundaries of what's possible with AI and document management."
                  type="paragraph"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <EditableContent
                  id="about-value-2-title"
                  defaultContent="Security"
                  type="heading"
                />
                <EditableContent
                  id="about-value-2-description"
                  defaultContent="We prioritize the security and privacy of our clients' sensitive documents above all else."
                  type="paragraph"
                />
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <EditableContent
                  id="about-value-3-title"
                  defaultContent="Excellence"
                  type="heading"
                />
                <EditableContent
                  id="about-value-3-description"
                  defaultContent="We strive for excellence in every aspect of our service and support."
                  type="paragraph"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <EditableContent
                id="about-team-title"
                defaultContent="Our Leadership Team"
                type="heading"
              />
              <EditableContent
                id="about-team-description"
                defaultContent="Meet the experts behind Kanz.ai's innovation and success"
                type="paragraph"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="text-center">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <UserCircle className="h-12 w-12" />
                  </div>
                  <EditableContent
                    id={`about-team-member-${member.id}-name`}
                    defaultContent={member.name}
                    type="heading"
                  />
                  <EditableContent
                    id={`about-team-member-${member.id}-role`}
                    defaultContent={member.role}
                    type="text"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <EditableContent
              id="about-cta-title"
              defaultContent="Join Us in Shaping the Future"
              type="heading"
            />
            <EditableContent
              id="about-cta-description"
              defaultContent="Be part of the revolution in AI-driven document management"
              type="paragraph"
            />
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
            >
              <EditableContent
                id="about-cta-button"
                defaultContent="Get in Touch"
              />
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;