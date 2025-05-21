// Node.js backend — mlController.js
// backend/controllers/mlController.js
const { execFile } = require('child_process');
const path = require('path');
const PestDiseaseInfo = require('../models/PestDiseaseInfo'); // define model with solutions

// Helper: send email and SMS (using nodemailer & twilio)
const sendNotification = require('../utils/notification');

exports.analyzeCropImage = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'Image is required' });

    const imagePath = path.join(__dirname, '..', 'uploads', 'images', req.file.filename);

    // Call Python predict.py script
    execFile('python3', [path.join(__dirname, '..', 'predict.py'), imagePath], (error, stdout, stderr) => {
      if (error) {
        return res.status(500).json({ message: 'Error running model', error: stderr || error.message });
      }

      let result;
      try {
        result = JSON.parse(stdout);
      } catch {
        return res.status(500).json({ message: 'Invalid response from model' });
      }

      if (result.error) {
        return res.status(400).json({ message: result.error });
      }

      // Prepare alert message
      const alerts = [];
      for (const detection of result.detections) {
        // Lookup solution in DB (or a static object)
        // Example static:
        const info = {
          aphids: {
            solution_en: "Use neem oil spray twice a week.",
            solution_hi: "नीम तेल का स्प्रे सप्ताह में दो बार करें।"
          },
          powdery_mildew: {
            solution_en: "Apply sulfur fungicide early morning.",
            solution_hi: "सुबह जल्दी सल्फर फंगीसाइड का प्रयोग करें।"
          }
        }[detection.label];

        if (info) {
          alerts.push({
            pest: detection.label,
            confidence: detection.confidence,
            solution: info.solution_en, // Change based on user language
          });
        }
      }

      if (alerts.length === 0) {
        return res.json({ message: 'No pests or diseases detected' });
      }

      // Send notifications (email & SMS)
      sendNotification(req.user.email, alerts);

      res.json({ message: 'Pests/Diseases detected', alerts });
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
