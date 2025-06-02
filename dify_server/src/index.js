require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors(
  {
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }
));

app.use(express.json());


const PORT = process.env.PORT || 7001;
app.get('/', (req, res) => {
  res.send('DifyTek Server is running');
});

app.post('/api/sendEmail', async (req, res) => {
  const emailService = require('./services/email.svc');
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }
  const html1 = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #ddd; border-radius: 8px; background-color: #ffffff;">
    <h1 style="color: #2c3e50; border-bottom: 2px solid #eee; padding-bottom: 10px;">📩 New Enquiry From Website</h1>
    
    <p style="font-size: 16px; color: #333;"><strong>Name:</strong> ${name}</p>
    <p style="font-size: 16px; color: #333;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3498db;">${email}</a></p>
    <p style="font-size: 16px; color: #333;"><strong>Message:</strong></p>
    <div style="background: #f4f4f4; padding: 15px; border-radius: 5px; color: #555; font-size: 15px;">
      ${message}
    </div>

    <p style="font-size: 12px; color: #999; margin-top: 30px;">
      This message was sent from the DifyTek website contact form.
    </p>
  </div>
`;
  const html2 = `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 30px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9;">
    <h1 style="color: #2c3e50;">Thank You, ${name}!</h1>
    <p style="font-size: 16px; color: #333;">We appreciate your message and will get back to you shortly.</p>
    
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ccc;">

    <p style="font-size: 14px; color: #555;">
      In the meantime, feel free to connect with us on social media!
    </p>

    <div style="text-align: center; margin-top: 20px;">
      <a href="https://www.linkedin.com/company/difytek/" target="_blank" style="margin: 0 10px;">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="30" height="30" style="vertical-align: middle;">
      </a>
      <a href="https://www.instagram.com/dify_tek?igsh=djJzZ3o1bTB3OXJ6&utm_source=ig_contact_invite" target="_blank" style="margin: 0 10px;">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" height="30" style="vertical-align: middle;">
      </a>
    </div>

    <p style="font-size: 12px; color: #999; margin-top: 30px;">
      © ${new Date().getFullYear()} DifyTek. All rights reserved.
    </p>
  </div>
`
  try {
    const result = await emailService.sendEmail('difytek@gmail.com', 'New Enquiry From website', html1, html1);
    const sendToClient = await emailService.sendEmail(email, 'Thank you for contacting DifyTek', html2, html2);

    if (result.success && sendToClient.success) {
      res.status(200).json({ message: 'Email sent successfully', messageId: result.messageId });
    } else {
      res.status(500).json({ error: 'Failed to send email', details: result.error });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending email', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});