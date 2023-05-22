const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('Course');
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('requests');
    res.status(200).json({
      status: 'success',
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
}

exports.updateUser = catchAsync(async (req, res, next) => {
  const user = findUserById(req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  user.role = req.body.role;
  user.branch = req.body.branch;
  user.year = req.body.year;
  user.semester = req.body.semester;
  await user.save();

  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});