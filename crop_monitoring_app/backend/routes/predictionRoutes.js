const express = require('express');
const router = express.Router();

const { savePrediction, getPredictionsByUser } = require('../controllers/predictionController');
const { handlePrediction } = require('../controllers/mlController'); // ML logic (e.g., using YOLO)
const { protect } = require('../middleware/authMiddleware');
const { upload } = require('../middleware/uploadMiddleware');

// POST - Handle prediction from uploaded image
//router.post('/predict', protect, upload.single('image'), handlePrediction);
router.post('/predict', protect, upload.single('image'));
// POST - Save prediction result to DB
router.post('/save', protect, savePrediction);

// GET - Fetch user's past predictions
router.get('/my-predictions', protect, getPredictionsByUser);

module.exports = router;
