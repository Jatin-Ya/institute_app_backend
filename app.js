const express = require('express');
const cors = require('cors');
const catchAsync = require('./utils/catchAsync');
const requestLogger = require('./utils/requestLogger');
const app = express();

const courseRouter = require('./routes/courseRoutes');
const timetableRouter = require('./routes/timetableRoutes');
const authRouter = require('./routes/authRoutes');
const mapMarkerRouter = require('./routes/mapMarkerRoutes');
const userRouter = require('./routes/userRoutes');
const notificationTokenRouter = require('./routes/notificationTokenRoutes');

app.use(cors());
app.use(express.json());

app.use(requestLogger);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/timetables', timetableRouter);
app.use('/api/v1/mapMarkers', mapMarkerRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/notificationTokens', notificationTokenRouter);




app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';
  res.status(statusCode).json({
    status,
    message: err.message,
  });
});

module.exports = app;
