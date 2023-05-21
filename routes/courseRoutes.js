const express = require('express');

const courseController = require('../controllers/courseController');

const router = express.Router();

router.get('/',courseController.getAllCourses);

module.exports = router;