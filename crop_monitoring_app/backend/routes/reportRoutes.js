// backend/routes/reportRoutes.js – Get Disease Detection Results
const express = require('express');
const { getReportsByUser, createReport } = require('../controllers/reportController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', protect, createReport);
router.get('/my-reports', protect, getReportsByUser);

module.exports = router;
