import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailjs';
import { mapFormDataToTemplateParams } from '../utils/formUtils';
import type { FormData } from '../types/email';

export const sendRequestAccessEmail = async (formData: FormData): Promise<void> => {
  try {
    const templateParams = mapFormDataToTemplateParams(formData);
    await emailjs.init(emailConfig.publicKey);
    await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams
    );
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};