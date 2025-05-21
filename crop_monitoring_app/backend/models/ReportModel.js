//Report.js – For disease detection results
// backend/models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  crop: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Crop',
    required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  result: {
    type: String, // e.g. "Healthy", "Blight", "Rust", etc.
    required: true,
  },

  confidence: {
    type: Number, // e.g. 95.7 (as percent)
    required: true,
  },

  generatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Report', reportSchema);
