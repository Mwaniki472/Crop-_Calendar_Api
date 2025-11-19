require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const weatherRoutes = require('./routes/weather');
const activityRoutes = require('./routes/activity');

const app = express();
app.use(express.json());

// CORS: allow frontend origin (set FRONTEND_URL in env)
const FRONTEND = process.env.FRONTEND_URL || '*';
app.use(cors({ origin: FRONTEND, credentials: true }));

app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);
app.use('/api/activity', activityRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
  });
