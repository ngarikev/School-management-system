const Grade = require('../models/gradeModel')

//fetching grade data from databased
exports.getGrades = async(req, res) => {
  try {
    const grade = await Grade.getAllGrades()
    if(!grade.length){
      return res.status(404).json({message: "No grades found"})
    }
    return res.status(200).json(grade)
  } catch (error) {
    console.error('Error fetching gradess:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}