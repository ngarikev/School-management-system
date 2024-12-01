const Term = require('../models/yearTermModel')

//fetching year-term data from databased
exports.getYearTerms = async(req, res) => {
  try {
    const term = await Term.getAllYearTerms()
    if(!term.length){
      return res.status(404).json({message: "No year-term found"})
    }
    return res.status(200).json(term)
  } catch (error) {
    console.error('Error fetching year-term:', error.message);
    res.status(500).json({ message: 'An unexpected error occurred', error });
  }
}