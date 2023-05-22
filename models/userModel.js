const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  image: { type: String, required: true },
  // designation: { type: String, default: 'User' },
  role: { type: String, default: 'Student' },
  courses: [{ type: mongoose.Schema.ObjectId, ref: 'Course' }],
  branch: { type: String },
  year: { type: Number},
  semester: { type: Number},

});

const User = mongoose.model('User', userSchema);

module.exports = User;
