// backend/routes/authRoutes.js – Register/Login
const express = require('express');
const { registerUser, loginUser, handleForgotPassword, resetPassword  } = require('../controllers/authController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot-password', handleForgotPassword);
router.post('/reset-password', resetPassword);
module.exports = router;

