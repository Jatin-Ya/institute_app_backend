const NotificationToken = require('../models/notificationTokenModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllNotificationTokens = catchAsync( async (req, res, next) => {
  const notificationTokens = await NotificationToken.find();
  if (notificationTokens.length === 0) {
    return res.status(200).json({
      status: 'success',
      results: 0,
      data: {
        notificationTokens: [],
      },
    });
  }
  res.status(200).json({
    status: 'success',
    results: notificationTokens[0].tokens.length,
    data: {
      notificationTokens : notificationTokens[0].tokens,
    },
  });
});

exports.createNotificationToken = catchAsync( async (req, res) => {
  let tokenList = await NotificationToken.find();
  // console.log(req.body.notificationToken);
  if (tokenList.length > 0) {
    if (tokenList[0].tokens.includes(req.body.notificationToken)) {
      return res.status(201).json({
        status: 'success',
      });
    }
    tokenList[0].tokens.push(req.body.notificationToken);
    await tokenList[0].save();
  }
  else {
    tokenList = await NotificationToken.create({ tokens: [req.body.notificationToken] });
  }
  res.status(201).json({
    status: 'success',
  });
});