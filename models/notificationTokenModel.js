const mongoose  = require('mongoose');

const notificationTokenSchema = new mongoose.Schema({
  tokens: [{ type: String, required: [true, 'A notificationToken must have a token'] }],
});

const NotificationToken = mongoose.model('NotificationToken', notificationTokenSchema);

module.exports = NotificationToken;