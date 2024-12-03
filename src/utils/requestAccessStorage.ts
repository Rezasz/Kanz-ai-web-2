import { v4 as uuidv4 } from 'uuid';

export interface RequestAccessData {
  id: string;
  timestamp: string;
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

const STORAGE_KEY = 'request_access_submissions';

export const saveRequestAccess = (data: Omit<RequestAccessData, 'id' | 'timestamp'>): void => {
  const submissions = getRequestAccessSubmissions();
  
  const newSubmission: RequestAccessData = {
    ...data,
    id: uuidv4(),
    timestamp: new Date().toISOString()
  };
  
  submissions.push(newSubmission);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(submissions));
};

export const getRequestAccessSubmissions = (): RequestAccessData[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};