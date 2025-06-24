const express = require('express');
const router = express.Router();
const DealerApplication = require('../models/DealerApplication');

router.post('/dealer-application', async (req, res) => {
  try {
    const application = new DealerApplication(req.body);
    await application.save();
    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Error saving application', details: err });
  }
});

module.exports = router;
