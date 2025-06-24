const mongoose = require('mongoose');

const contactFormSchema = new mongoose.Schema({
  fullName: String,
  contactNumber: String,
  country: String,
  state: String,
  city: String,
  subject: String,
  email: String,
  message: String,
  agreeToPolicy: Boolean,
  submittedAt: {
    type: Date,
    default: Date.now
  }},{ timestamps: true }
);

module.exports = mongoose.model('ContactForm', contactFormSchema);
