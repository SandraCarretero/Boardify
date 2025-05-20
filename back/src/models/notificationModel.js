const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    message: String,
    read: { type: Boolean, default: false },
    type: { type: String, enum: ['friend_request', 'game_invite'] }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Notification', notificationSchema);
