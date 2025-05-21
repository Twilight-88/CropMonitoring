// LanguagePreference.js – For user-selected language
// backend/models/LanguagePreference.js
const mongoose = require('mongoose');

const languagePreferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    unique: true,
    required: true,
  },

  languageCode: {
    type: String, // e.g. "en", "hi", "te"
    default: 'en',
  },
});

module.exports = mongoose.model('LanguagePreference', languagePreferenceSchema);
