const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');


dotenv.config();

const app = express();

// Middleware
app.use(cors());


app.use(cors({
    origin: ["https://orientbelltiles.vercel.app"],
    methods: ['GET', 'POST'],
    credentials: true
}))

app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: "Hello from backend!" });
});

// Routes
app.use('/api', contactRoutes); // All routes will be prefixed with /api
app.use("/api/payment", require("./routes/payment"));

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/yourdbname';

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));