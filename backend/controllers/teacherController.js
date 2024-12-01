const Teacher = require('../models/teacherModel')


//fetching teachers data from database
exports.getTeaches = async(req, res) => {
  try {
    const teacher = await Teacher.getAllTeachers()
    if(!teacher.length) {
      return res.status(404).json({ message: 'No teachers found' });
    }
    return res.status(200).json(teacher)
  } catch (error) {
    console.error('Error fetching teachers:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}