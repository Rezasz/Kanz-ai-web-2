import React, { useState } from 'react';
import { Mail, Phone, Building2, Globe, Send } from 'lucide-react';
import { saveRequestAccess } from '../utils/requestAccessStorage';
import { toast } from 'react-hot-toast';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      saveRequestAccess(formData);
      
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
      console.error('Error saving request:', error);
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
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Request Access & Stay Informed</h1>
              <p className="mt-2 text-gray-600">Get early access to Kanz.ai's intelligent platform. Let us understand your needs better.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Personal Information</h2>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Professional Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Professional Information</h2>
                
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700">Job Title</label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-gray-700">Industry *</label>
                  <select
                    id="industry"
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
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700">Company Size</label>
                  <select
                    id="companySize"
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

                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Areas of Interest */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Areas of Interest *</h2>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="documentManagement"
                      name="interests.documentManagement"
                      checked={formData.interests.documentManagement}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="documentManagement" className="ml-2 block text-sm text-gray-700">
                      Document Management Solutions
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="workflowAutomation"
                      name="interests.workflowAutomation"
                      checked={formData.interests.workflowAutomation}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="workflowAutomation" className="ml-2 block text-sm text-gray-700">
                      Workflow Automation
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="aiContentAnalysis"
                      name="interests.aiContentAnalysis"
                      checked={formData.interests.aiContentAnalysis}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="aiContentAnalysis" className="ml-2 block text-sm text-gray-700">
                      AI Content Analysis
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="collaborationTools"
                      name="interests.collaborationTools"
                      checked={formData.interests.collaborationTools}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor="collaborationTools" className="ml-2 block text-sm text-gray-700">
                      Collaboration Tools
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Additional Information</h2>
                
                <div>
                  <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700">Purchase Timeframe</label>
                  <select
                    id="timeframe"
                    name="timeframe"
                    value={formData.timeframe}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Timeframe</option>
                    <option value="3-months">Ready to buy in the next 3 months</option>
                    <option value="6-12-months">6-12 months</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="source" className="block text-sm font-medium text-gray-700">How did you hear about us?</label>
                  <select
                    id="source"
                    name="source"
                    value={formData.source}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  >
                    <option value="">Select Source</option>
                    <option value="web-search">Web Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Online Advertisement</option>
                    <option value="event">Event/Conference</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700">Comments or Questions</label>
                  <textarea
                    id="comments"
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Consent */}
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="marketingConsent"
                      name="marketingConsent"
                      checked={formData.marketingConsent}
                      onChange={handleCheckboxChange}
                      required
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="marketingConsent" className="text-sm text-gray-700">
                      I consent to receive news, updates, and offers from Kanz.ai *
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  <Send className="h-5 w-5 mr-2" />
                  Submit Request
                </button>
                <p className="mt-2 text-xs text-gray-500 text-center">
                  We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestAccess;