const express = require('express');

const router = express.Router();

const notificationTokenController = require('../controllers/notificationTokenController');

router
  .route('/')
  .get(notificationTokenController.getAllNotificationTokens)
  .post(notificationTokenController.createNotificationToken);

module.exports = router;