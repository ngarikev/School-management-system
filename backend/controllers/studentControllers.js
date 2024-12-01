const Student = require('../models/studentModel')

////fetching student data from database

exports.getStudents = async (req, res) =>{
  try {
    const students = await Student.getAll();
    if (!students.length) {
      return res.status(404).json({ message: 'No students found' });
    }
    return res.status(200).json(students)
    
  } catch (error) {
    console.error('Error fetching students:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}