const pool = require('../configDb/db')

const Class = {
  getAllClasses: async() =>{
    const [rows] = await pool.query("SELECT * FROM classes");
    return rows
  }
}


module.exports = Class