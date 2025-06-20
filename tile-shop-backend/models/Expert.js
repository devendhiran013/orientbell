const mongoose = require('mongoose');

const expertSchema = new mongoose.Schema({
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  pincode: { type: String, required: true },
  location: { type: String, required: true },
  roomType: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Expert', expertSchema);
