const Prediction = require('../models/PredictionModel');

exports.savePrediction = async (req, res) => {
  const { imageUrl, result } = req.body;

  try {
    const prediction = new Prediction({
      user: req.user.id,
      imageUrl,
      result,
    });

    await prediction.save();
    res.status(201).json(prediction);
  } catch (err) {
    res.status(500).json({ message: 'Error saving prediction', error: err.message });
  }
};

exports.getPredictionsByUser = async (req, res) => {
  try {
    const predictions = await Prediction.find({ user: req.user.id });
    res.json(predictions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching predictions', error: err.message });
  }
};
