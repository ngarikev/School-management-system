const Class = require('../models/classmodel')

//fetching classes ata from databased
exports.getClasses = async(req, res) => {
  try {
    const classRoom = await Class.getAllClasses()
    if(!classRoom.length){
      return res.status(404).json({message: "No Class found"})
    }
    return res.status(200).json(classRoom)
  } catch (error) {
    console.error('Error fetching classes:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}