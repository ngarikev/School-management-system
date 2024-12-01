const pool = require('../configDb/db')

const Exam = {
  getAllExams: async() =>{
    const [rows] = await pool.query("SELECT * FROM exam_schedule");
    return rows
  }
}


module.exports = Exam