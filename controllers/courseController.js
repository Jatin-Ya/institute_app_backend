const Course = require('../models/courseModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllCourses = catchAsync(async (req, res, next) => {
  const courses = await Course.find();
  res.status(200).json({
    status: 'success',
    results: courses.length,
    data: {
      courses,
    },
  });
});


exports.getCourse =catchAsync(async(req, res,next)=>{
  const course =await Course.findById(req.params.id); 
  res.status(200).json({
      status:'success',
      data : {
          course
      }
  });
});

exports.createCourse =catchAsync( async (req, res,next)=>{

  const newCourse = await Course.create(req.body);
  res.status(201).json({
      status:"success",
      data: {
          course : newCourse
      }
  });   

});

exports.updateCourse= catchAsync(async (req, res,next) => {

const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
  new: true,
  runValidators : true,
});
res.status(200).json({
  status: "success",
  data : {
      course
  } 
});

});

exports.deleteCourse=catchAsync(async (req,res,next)=>{

await Course.findByIdAndDelete(req.params.id);
res.status(204).json({
  status: "success",
  data:null
});

});



