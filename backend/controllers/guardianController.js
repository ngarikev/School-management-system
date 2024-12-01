const Guardian = require('../models/guardianModel')

////fetching guardians data from database
exports.getGuardians = async(req, res) => {
  try {
    const guardian = await Guardian.getAllGuardians();
    if(!guardian.length){
      return res.status(404).json({message: "No guardian found"})
    }
    return res.status(200).json(guardian)
  } catch (error) {
    console.error('Error fetching guardians:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}