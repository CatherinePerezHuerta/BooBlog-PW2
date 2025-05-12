const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  profileCustomization: { type: Object, default: {} },
  friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  groups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Group' }],
  privacySettings: {
    visibility: { type: String, enum: ['public', 'private', 'friends'], default: 'public' },
    allowMessages: { type: Boolean, default: true },
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
