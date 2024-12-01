const pool = require('../configDb/db')

const Grade = {
  getAllGrades: async() =>{
    const [rows] = await pool.query("SELECT * FROM grades");
    return rows
  }
}


module.exports = Grade