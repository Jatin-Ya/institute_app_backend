const mongoose = require('mongoose');

const timetableSchema = new mongoose.Schema({
  day: { type: String, required: [true, 'A timetable must have a day'] },
  // slot: { type: String, required: [true, 'A timetable must have a slot'] },
  startTime: { type: {
    hour: { type: Number, required: [true, 'A timetable must have an start hour'] },
    minute: { type: Number, required: [true, 'A timetable must have an start minute'] },
  }, required: [true, 'A timetable must have an start time'] },
  endTime: { type: {
    hour: { type: Number, required: [true, 'A timetable must have an end hour'] },
    minute: { type: Number, required: [true, 'A timetable must have an end minute'] },
  }, required: [true, 'A timetable must have an end time'] },
  course: { type: mongoose.Schema.ObjectId, ref: 'Course' },
  branch: { type: String, required: [true, 'A timetable must have a branch'] },
  year: { type: Number, required: [true, 'A timetable must have a year'] },
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;