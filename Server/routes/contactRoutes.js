const express = require('express');
const router = express.Router();
const ContactForm = require('../models/ContactForm');

router.post('/contact', async (req, res) => {
  try {
    const contact = new ContactForm(req.body);
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting form', error });
  }
});

module.exports = router;
