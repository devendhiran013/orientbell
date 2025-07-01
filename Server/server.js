const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const authRoutes = require('./routes/auth'); // ✅ Corrected
const dealerRoutes = require('./routes/dealerRoutes');
const expertRoutes = require('./routes/expertRoutes');
const paymentRoutes = require('./routes/payment');

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Routes


app.use('/api/auth', authRoutes);           // ✅ mounted correctly
app.use('/api', contactRoutes);
app.use('/api', dealerRoutes);
app.use('/api', expertRoutes);
app.use('/api/payment', paymentRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
