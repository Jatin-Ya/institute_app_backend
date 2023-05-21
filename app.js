const express = require('express');
const cors = require('cors');
const catchAsync = require('./utils/catchAsync');
const app = express();

const courseRouter = require('./routes/courseRoutes');

app.use(cors());
app.use(express.json());

app.use('/api/v1/courses', courseRouter);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';
  res.status(statusCode).json({
    status,
    message: err.message,
  });
});

module.exports = app;
