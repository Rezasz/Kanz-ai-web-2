import React from 'react';
import { Lock, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPrompt = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="px-6 py-8">
            <div className="text-center">
              <FileText className="mx-auto h-12 w-12 text-blue-600" />
              <h2 className="mt-4 text-3xl font-bold text-gray-900">Knowledge Base</h2>
              <p className="mt-2 text-gray-600">
                Access our comprehensive collection of technical documentation, guides, and resources.
              </p>
            </div>

            <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
                <p className="ml-2 text-sm text-gray-600">
                  Use your partner's Login Credentials to Access the Knowledge base
                </p>
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/login')}
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Login to Access
              </button>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Contact your account manager if you need access credentials.
              </p>
            </div>
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p>Protected documents include:</p>
              <ul className="mt-2 space-y-1">
                <li>Technical Documentation</li>
                <li>Integration Guides</li>
                <li>API References</li>
                <li>Best Practices</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPrompt;