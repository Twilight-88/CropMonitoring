const User = require('../models/UserModel');

const attachLanguage = async (req, res, next) => {
  try {
    if (req.user && req.user._id) {
      const user = await User.findById(req.user._id).select('language');
      req.language = user?.language || 'en'; // fallback to 'en' if not set
    } else {
      req.language = 'en';
    }
    next();
  } catch (err) {
    console.error('Error attaching language:', err.message);
    req.language = 'en';
    next();
  }
};

module.exports = { attachLanguage };
