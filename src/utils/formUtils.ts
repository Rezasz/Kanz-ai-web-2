import type { FormData, EmailTemplateParams } from '../types/email';

export const mapFormDataToTemplateParams = (formData: FormData): EmailTemplateParams => ({
  to_name: 'Admin',
  from_name: formData.name,
  reply_to: formData.email,
  message: `
Personal Information:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Professional Information:
Company Name: ${formData.companyName}
Job Title: ${formData.jobTitle}
Industry: ${formData.industry}
Company Size: ${formData.companySize}
Country: ${formData.country}

Areas of Interest:
- Document Management: ${formData.interests.documentManagement ? 'Yes' : 'No'}
- Workflow Automation: ${formData.interests.workflowAutomation ? 'Yes' : 'No'}
- AI Content Analysis: ${formData.interests.aiContentAnalysis ? 'Yes' : 'No'}
- Collaboration Tools: ${formData.interests.collaborationTools ? 'Yes' : 'No'}

Additional Information:
Communication Preference: ${formData.communicationPreference}
Timeframe: ${formData.timeframe}
Source: ${formData.source}
Marketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}

Comments:
${formData.comments}

Submission Time: ${new Date().toLocaleString()}
`
});