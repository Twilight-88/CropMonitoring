// utils/sendEmail.js
const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: 'FarmApp <noreply@farmapp.com>',
      to: options.email,
      subject: options.subject,
      html: options.message
    };

    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Email sending failed:', err);
    throw new Error('Email could not be sent');
  }
};


module.exports = sendEmail;