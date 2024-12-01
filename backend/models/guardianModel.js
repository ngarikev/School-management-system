const pool = require('../configDb/db')

const Guardian = {
  getAllGuardians: async() => {
    const [rows] = await pool.query("SELECT * FROM guardians");
    return rows
  }
}


module.exports = Guardian