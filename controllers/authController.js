const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const axios = require('axios');

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.login = async (req, res) => {
  try{
    const { token } = req.body;
    console.log(token);
    if (!token) {
      return res.status(400).json({
        status: 'fail',
        message: 'Please provide a token',
      });
    }

    const response = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json',
        }
      }
    )

    console.log(response?.data);
    
    const { email, name, picture } = response?.data;
    let currentUser = await User.findOne({ email });
    if (!currentUser) {
      currentUser = await User.create({
        email,
        name,
        image: picture,
        role: 'Student',
      });
      await currentUser.save();
    }

    if (currentUser.picture !== picture) {
      currentUser.picture = picture;
      await currentUser.save();
    }

    const jwt_token = createToken(currentUser._id, currentUser.designation);

    res.status(200).json({
      status: 'success',
      jwt: jwt_token,
      data: {
        user: currentUser,
      },
      message: 'Logged in successfully',
    })
  }
  catch(err){
    console.log(err);
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
}