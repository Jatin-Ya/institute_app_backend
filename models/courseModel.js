const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'A course must have a name'], unique: true },
  description: { type: String, required: [true, 'A course must have a description'] },
  credits: { type: Number, required: [true, 'A course must have a credit value'] },
  department: { type: String, required: [true, 'A course must have a department'] },
  prerequisites: [{ type: mongoose.Schema.ObjectId, ref: 'Course' }],
  instructors: [{ type: mongoose.Schema.ObjectId, ref: 'Prof' }],
  maxStrength: { type: Number, required: [true, 'A course must have a maximum strength'] },
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;