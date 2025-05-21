const Report = require('../models/ReportModel');

exports.createReport = async (req, res) => {
  const { cropName, detectedDisease, solution, user } = req.body;

  try {
    const report = new Report({ cropName, detectedDisease, solution, user });
    await report.save();
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: 'Error creating report', error: err.message });
  }
};

exports.getReportsByUser = async (req, res) => {
  try {
    const reports = await Report.find({ user: req.user.id });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching reports', error: err.message });
  }
};
