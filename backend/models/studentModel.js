const pool = require('../configDb/db')

const Student = {
  getAll: async () => {
    const [rows] = await pool.query("SELECT * FROM students");
    return rows
  },
  getById: async (id) => {
    const [rows] = await pool.query('SELECT * FROM students WHERE id = ?', [id]);
    return rows[0];
  },
}




module.exports = Student