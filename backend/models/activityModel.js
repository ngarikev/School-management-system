const pool = require('../configDb/db')

const Activity = {
  getAllActivities: async() =>{
    const [rows] = await pool.query("SELECT * FROM activities");
    return rows
  }
}


module.exports = Activity