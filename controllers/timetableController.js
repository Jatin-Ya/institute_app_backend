const Timetable = require('../models/timetableModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllTimetables = catchAsync(async (req, res, next) => {
  const timetables = await Timetable.find().populate('timetables').populate('prof');
  res.status(200).json({
    status: 'success',
    results: timetables.length,
    data: {
      timetables,
    },
  });
});

exports.getTimetable =catchAsync(async(req, res,next)=>{
  const timetables =await Timetable.findById(req.params.id); 
  res.status(200).json({
      status:'success',
      data : {
          timetables
      }
  });
});

exports.createTimetable =catchAsync( async (req, res,next)=>{

  const newTimetable = await Timetable.create(req.body);
  res.status(201).json({
      status:"success",
      data: {
          timetable : newTimetable
      }
  });   

});

exports.updateTimetable= catchAsync(async (req, res,next) => {

const timetables = await Timetable.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators : true,
});
res.status(200).json({
  status: "success",
  data : {
      timetables
  } 
});

});

exports.deleteTimetable=catchAsync(async (req,res,next)=>{

await Timetable.findByIdAndDelete(req.params.id);
res.status(204).json({
  status: "success",
  data:null
});

});



