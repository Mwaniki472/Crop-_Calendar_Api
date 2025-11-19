const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
  text: { type: String, required: true },
  lat: { type: Number },
  lng: { type: Number },
  date: { type: Date, default: Date.now }
});

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  location: { type: String, default: 'Nairobi' },
  activities: [ActivitySchema]
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
