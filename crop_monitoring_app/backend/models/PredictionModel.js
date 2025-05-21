// Prediction.js – For storing detailed YOLO/computer vision results
// backend/models/Prediction.js
const mongoose = require('mongoose');

const predictionSchema = new mongoose.Schema({
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

  predictions: [
    {
      label: {
        type: String,
        required: true, // e.g. "Leaf Blight", "Healthy", etc.
      },
      confidence: {
        type: Number,
        required: true, // e.g. 92.5
      },
      bbox: {
        x: Number,
        y: Number,
        width: Number,
        height: Number,
      },
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Prediction', predictionSchema);
