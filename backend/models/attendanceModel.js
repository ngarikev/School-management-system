const pool = require('../configDb/db')

const Attendance = {
  getAllAttendances: async() =>{
    const [rows] = await pool.query("SELECT * FROM attendance_records");
    return rows
  }
}


module.exports = Attendance