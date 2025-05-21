const User = require('../models/UserModel');

exports.setLanguage = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.user.id,
      { language: req.body.language },
      { new: true }
    );
    res.json({ language: user.language });
  } catch (err) {
    res.status(500).json({ message: 'Error updating language', error: err.message });
  }
};

exports.getLanguage = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ language: user.language });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching language', error: err.message });
  }
};
