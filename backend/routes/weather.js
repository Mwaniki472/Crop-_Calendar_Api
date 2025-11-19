const express = require('express');
const router = express.Router();
const axios = require('axios');
const auth = require('../middleware/auth');
const User = require('../models/user');

// GET /api/weather/today
router.get('/today', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const location = user?.location || 'Nairobi';
    const apiKey = process.env.OPENWEATHER_KEY;
    if (!apiKey) return res.status(500).json({ message: 'OpenWeather API key not set' });

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&units=metric&appid=${apiKey}`;
    const response = await axios.get(url);
    const data = response.data;

    res.json({
      location,
      temp: data.main.temp,
      feels_like: data.main.feels_like,
      humidity: data.main.humidity,
      weather: data.weather[0].description,
      wind: data.wind,
      raw: data
    });
  } catch (err) {
    console.error(err?.response?.data || err.message);
    res.status(500).json({ message: 'Failed to fetch weather' });
  }
});

module.exports = router;
