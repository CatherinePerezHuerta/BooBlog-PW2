const mongoose = require('mongoose');

const ErrorLogSchema = new mongoose.Schema({
  message: { type: String, required: true },
  stack: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('ErrorLog', ErrorLogSchema);
