// backend/routes/cropRoutes.js – Upload/View Crop Images
const express = require('express');
const { uploadCropImage, getCrops, updateCrop, deleteCrop } = require('../controllers/cropController');
const { protect } = require('../middleware/authMiddleware');
//const upload = require('../middleware/multerMiddleware');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload', protect, upload.single('image'), uploadCropImage);
router.get('/', protect, getCrops);

router.put('/:id', protect, upload.single('image'), updateCrop);
router.delete('/:id', protect, deleteCrop);

module.exports = router;
