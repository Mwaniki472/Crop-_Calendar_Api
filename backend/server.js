require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const activityRoutes = require('./routes/activity');

const app = express();

// Allow frontend dev origin (adjust if your Vite port differs)
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json()); // <-- required to parse JSON bodies

app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/activity', activityRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log('Server running on', PORT);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
