// backend/controllers/cropController.js
const Crop = require('../models/CropModel');
const path = require('path');


exports.uploadCropImage = async (req, res) => {
  try {
    const { cropName } = req.body;

    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' });
    }

    // Build relative URL path to serve the image from /uploads folder
    const imageUrl = path.join('/uploads', req.file.filename).replace(/\\/g, '/');

    const newCrop = new Crop({
      user: req.user._id,                 // From the protect middleware
      cropName,
      //imageUrl: req.file.path,           // Stored image path
      imageUrl,  // Save URL path, not local absolute path
    });

    const savedCrop = await newCrop.save();
    res.status(201).json({ message: 'Crop image uploaded successfully', crop: savedCrop });

  } catch (error) {
    res.status(500).json({ message: 'Error uploading crop image', error: error.message });
  }
};

exports.getCrops = async (req, res) => {
  try {
    const crops = await Crop.find({ user: req.user._id });
    res.json(crops);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching crops', error: err.message });
  }
};


exports.updateCrop = async (req, res) => {
  try {
    const { id } = req.params;
    const { cropName } = req.body;

    const crop = await Crop.findById(id);
    if (!crop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    // Check if user owns the crop or is admin (optional)

    if (cropName) crop.cropName = cropName;

    // If new image uploaded, update imageUrl
    if (req.file) {
      crop.imageUrl = path.join('/uploads', req.file.filename).replace(/\\/g, '/');
    }

    const updatedCrop = await crop.save();
    res.json({ message: 'Crop updated', crop: updatedCrop });
  } catch (error) {
    res.status(500).json({ message: 'Error updating crop', error: error.message });
  }
};



exports.deleteCrop = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedCrop = await Crop.findByIdAndDelete(req.params.id);
    if (!deletedCrop) {
      return res.status(404).json({ message: 'Crop not found' });
    }

    // Optional: check if user owns the crop or is admin
    res.json({ message: 'Crop deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting crop', error: error.message });
  }
};

