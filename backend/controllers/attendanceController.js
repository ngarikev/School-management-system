const Attendance = require('../models/attendanceModel')

//fetching attendance record data from databased
exports.getAttendanceRecord = async(req, res) => {
  try {
    const attendance = await Attendance.getAllAttendances()
    if(!attendance.length){
      return res.status(404).json({message: "No attendance record found"})
    }
    return res.status(200).json(attendance)
  } catch (error) {
    console.error('Error fetching attendance records:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}