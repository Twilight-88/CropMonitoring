// Crop.js – For crop details & image uploads
// backend/models/CropModel.js
const mongoose = require('mongoose');

const cropSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  cropName: {
    type: String,
    required: true,
  },

  imageUrl: {
    type: String,
    required: true,
  },

  uploadedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Crop', cropSchema);
