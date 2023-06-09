const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Message model
const notificationSchema = new Schema({
  type: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
