const pool = require('../configDb/db')

const Subject = {
  getAllSubjects: async() =>{
    const [rows] = await pool.query("SELECT * FROM subjects");
    return rows
  }
}


module.exports = Subject