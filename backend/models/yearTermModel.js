const pool = require('../configDb/db')

const Term = {
  getAllYearTerms: async() =>{
    const [rows] = await pool.query("SELECT * FROM year_terms");
    return rows
  }
}


module.exports = Term