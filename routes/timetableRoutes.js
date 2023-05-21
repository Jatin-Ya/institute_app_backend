const express = require('express');

const timetableController = require('../controllers/timetableController');

const router = express.Router();

router
  .route('/')
  .get(timetableController.getAllTimetables);

module.exports = router;