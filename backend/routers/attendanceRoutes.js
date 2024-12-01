const express = require('express')
const router = express.Router()


const attendanceController = require('../controllers/attendanceController')

router.get('/', attendanceController.getAttendanceRecord)


module.exports = router