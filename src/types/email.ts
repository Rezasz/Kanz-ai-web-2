export interface EmailJSConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export interface EmailTemplateParams {
  to_name: string;
  from_name: string;
  reply_to: string;
  message: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  jobTitle: string;
  industry: string;
  companySize: string;
  country: string;
  interests: {
    documentManagement: boolean;
    workflowAutomation: boolean;
    aiContentAnalysis: boolean;
    collaborationTools: boolean;
  };
  communicationPreference: string;
  timeframe: string;
  source: string;
  marketingConsent: boolean;
  comments: string;
}