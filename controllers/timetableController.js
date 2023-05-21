const Timetable = require('../models/timetableModel');

exports.getAllTimetables = catchAsync(async (req, res, next) => {
  const timetables = await Timetable.find().populate('course').populate('prof');
  res.status(200).json({
    status: 'success',
    results: timetables.length,
    data: {
      timetables,
    },
  });
});
