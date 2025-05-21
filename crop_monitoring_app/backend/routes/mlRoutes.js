// backend/routes/mlRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multerMiddleware'); // your multer setup
const { protect } = require('../middleware/authMiddleware');
const { analyzeCropImage } = require('../controllers/mlController');

router.post('/analyze', protect, multer.single('image'), analyzeCropImage);

module.exports = router;
