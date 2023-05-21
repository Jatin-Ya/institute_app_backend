const express = require('express');

const timetableController = require('../controllers/timetableController');

const router = express.Router();

  router.route('/')
     .get(timetableController.getAllTimetables)
     .post(timetableController.createTimetable);
router.route('/:id')
      .get(timetableController.getTimetable)
      .patch(timetableController.updateTimetable)
      .delete(timetableController.deleteTimetable);

module.exports = router;