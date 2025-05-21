const mongoose = require('mongoose');

const PestDiseaseInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  crop: {
    type: String,
    required: true
  },
  category: {
    type: String, // "pest" or "disease"
    required: true
  },
  description: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  severity: {
    type: String, // optional: "low", "medium", "high"
    default: "medium"
  }
});

module.exports = mongoose.model('PestDiseaseInfo', PestDiseaseInfoSchema);
