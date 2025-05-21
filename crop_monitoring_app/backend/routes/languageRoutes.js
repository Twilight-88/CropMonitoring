// backend/routes/languageRoutes.js – Set/Get Language Preference
const express = require('express');
const { setLanguage, getLanguage } = require('../controllers/languageController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/set', protect, setLanguage);
router.get('/get', protect, getLanguage);

module.exports = router;
