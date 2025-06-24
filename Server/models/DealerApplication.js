const mongoose = require('mongoose');

const DealerApplicationSchema = new mongoose.Schema({
  companyName: String,
  contactPerson: String,
  phone: String,
  email: String,
  address: String,
  city: String,
  state: String,
  country: String,
  pincode: String,
  businessType: String,
  interestedProducts: String,
  annualTurnover: String,
  experience: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('DealerApplication', DealerApplicationSchema);
