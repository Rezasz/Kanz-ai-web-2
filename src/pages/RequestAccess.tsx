import React, { useState } from 'react';
import { Mail, Phone, Building2, Globe, Send } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { sendRequestAccessEmail } from '../services/emailService';

const RequestAccess = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    country: '',
    interests: {
      documentManagement: false,
      workflowAutomation: false,
      aiContentAnalysis: false,
      collaborationTools: false
    },
    communicationPreference: 'email',
    timeframe: '',
    source: '',
    marketingConsent: false,
    comments: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (name.startsWith('interests.')) {
      const interest = name.split('.')[1];
      setFormData(prev => ({
        ...prev,
        interests: {
          ...prev.interests,
          [interest]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await sendRequestAccessEmail(formData);
      
      toast.success(
        <div>
          <h3 className="font-bold">Thank you for your interest!</h3>
          <p>We have received your request and will contact you soon.</p>
        </div>,
        {
          duration: 5000,
          style: {
            background: '#10B981',
            color: '#FFFFFF',
          },
        }
      );
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        companyName: '',
        jobTitle: '',
        industry: '',
        companySize: '',
        country: '',
        interests: {
          documentManagement: false,
          workflowAutomation: false,
          aiContentAnalysis: false,
          collaborationTools: false
        },
        communicationPreference: 'email',
        timeframe: '',
        source: '',
        marketingConsent: false,
        comments: ''
      });
      
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit request. Please try again.', {
        duration: 4000,
        style: {
          background: '#EF4444',
          color: '#FFFFFF',
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-gray-900">Request Access & Stay Informed</h1>
            <p className="mt-4 text-lg text-gray-600">
              Get early access to Kanz.ai's intelligent platform. Let us understand your needs better.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Professional Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Professional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Industry *</label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Industry</option>
                    <option value="Finance">Finance</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Government">Government</option>
                    <option value="Oil & Gas">Oil & Gas</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Company Size</label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1000+">1000+ employees</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Areas of Interest</h2>
              <div className="space-y-4">
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.documentManagement"
                      checked={formData.interests.documentManagement}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Document Management Solutions</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.workflowAutomation"
                      checked={formData.interests.workflowAutomation}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Workflow Automation</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.aiContentAnalysis"
                      checked={formData.interests.aiContentAnalysis}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">AI Content Analysis</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="interests.collaborationTools"
                      checked={formData.interests.collaborationTools}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    />
                    <span className="ml-2">Collaboration Tools</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Additional Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Timeframe</label>
                  <select
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Timeframe</option>
                    <option value="3months">Ready to buy in the next 3 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Source</option>
                    <option value="websearch">Web Search</option>
                    <option value="socialmedia">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Online Advertisement</option>
                    <option value="event">Event/Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Comments */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-700">Comments or Questions</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Let us know if you have any questions or specific requirements..."
              />
            </div>

            {/* Marketing Consent */}
            <div className="mb-8">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleCheckboxChange}
                  required
                  className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-gray-600">
                  I consent to receive news, updates, and offers from Kanz.ai *
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <Send className="h-5 w-5 mr-2" />
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;