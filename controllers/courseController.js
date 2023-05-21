const Course = require('../models/courseModel');

exports.courseController = catchAsync(async () => {
  const courses = await Course.find();
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
      courses,
    },
  });
});