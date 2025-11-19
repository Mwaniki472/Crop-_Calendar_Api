const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/user');

// POST /api/activity - add a planned activity with optional coords
router.post('/', auth, async (req, res) => {
  try {
    const { text, lat, lng } = req.body;
    if (!text) return res.status(400).json({ message: 'Activity text required' });

    const user = await User.findById(req.user.id);
    user.activities.push({ text, lat, lng });
    await user.save();
    res.json({ activities: user.activities });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// GET /api/activity - list user's activities
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.json({ activities: user.activities || [] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// DELETE /api/activity/:id - remove activity
router.delete('/:id', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    user.activities = user.activities.filter(a => a._id.toString() !== req.params.id);
    await user.save();
    res.json({ activities: user.activities });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
