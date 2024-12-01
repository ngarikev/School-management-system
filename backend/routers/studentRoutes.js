const experss = require('express')
const router = experss.Router()

const studentController = require('../controllers/studentControllers.js')

router.get('/', studentController.getStudents)


module.exports = router