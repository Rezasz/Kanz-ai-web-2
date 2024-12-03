import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { exec } from "child_process";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/send-email", (req, res) => {
  const { formData } = req.body;

  if (!formData) {
    return res.status(400).json({ error: "Form data is required." });
  }

  // Format the email content
  const emailBody = `
    From: no-reply@kanz.ai
    To: rezakanzwebsite@gmail.com
    Subject: Request Access Form Submission

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

    Submission Time: ${new Date().toISOString()}
  `;

  // Send email using msmtp
  exec(`echo "${emailBody}" | msmtp -t`, (error, stdout, stderr) => {
    if (error) {
      console.error("Error sending email:", stderr);
      return res.status(500).json({ error: "Failed to send the email." });
    }

    console.log("Email sent successfully:", stdout);
    res.status(200).json({ message: "Email sent successfully." });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});