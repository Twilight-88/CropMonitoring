// backend/utils/notification.js
const nodemailer = require('nodemailer');
const twilio = require('twilio');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { 
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS 
  }
});

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_AUTH_TOKEN);

// Now properly define as async and include both email and SMS
const sendNotification = async (userEmail, userPhone, alerts) => {
  const alertText = alerts
    .map(a => `${a.pest} (${(a.confidence * 100).toFixed(1)}%): ${a.solution}`)
    .join('\n');

  try {
    // Send Email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: 'Crop Pest/Disease Alert',
      text: alertText
    });

    // Send SMS
    await twilioClient.messages.create({
      body: alertText,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: userPhone  // Ensure number is in international format
    });

    console.log('Notification sent to email and SMS!');
  } catch (err) {
    console.error('Notification error:', err.message);
  }
};

module.exports = sendNotification;
