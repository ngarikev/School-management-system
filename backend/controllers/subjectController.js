const Subject = require('../models/subjectModel')

//fetching subjects ata from databased
exports.getSubjects = async(req, res) => {
  try {
    const subject = await Subject.getAllSubjects()
    if(!subject.length){
      return res.status(404).json({message: "No subjects found"})
    }
    return res.status(200).json(subject)
  } catch (error) {
    console.error('Error fetching subjects:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}