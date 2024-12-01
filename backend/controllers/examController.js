const Exam = require('../models/examModel')

//fetching exam data from databased
exports.getExams = async(req, res) => {
  try {
    const exam = await Exam.getAllExams()
    if(!exam.length){
      return res.status(404).json({message: "No exam found"})
    }
    return res.status(200).json(exam)
  } catch (error) {
    console.error('Error fetching exams:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}