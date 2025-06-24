// routes/expertRoutes.js
const express = require('express');
const router = express.Router();
const Expert = require('../models/Expert');

router.post('/expert', async (req, res) => {
  try {
    const expert = new Expert(req.body);
    await expert.save();
    res.status(201).json({ message: 'Form saved' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
