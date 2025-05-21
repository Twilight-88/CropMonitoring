// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const cropRoutes = require('./routes/cropRoutes');
const reportRoutes = require('./routes/reportRoutes');
const languageRoutes = require('./routes/languageRoutes');
const predictionRoutes = require('./routes/predictionRoutes'); // Add this route
const mlRoutes = require('./routes/mlRoutes');


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/crops', cropRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/predictions', predictionRoutes); // Connect this too
app.use('/api/predictions/ml', mlRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT || 5000, () =>
    console.log(`Server running on port ${process.env.PORT || 5000}`)
  );
}).catch(err => console.error('MongoDB connection failed:', err));
