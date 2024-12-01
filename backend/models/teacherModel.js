const pool = require('../configDb/db')



const Teacher = {
  getAllTeachers: async () => {
    const [rows] = await pool.query("SELECT * FROM teachers");
    return rows
  }
}



module.exports = Teacher