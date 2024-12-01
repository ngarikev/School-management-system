const express = require('express')
const router = express.Router()

const guardianController = require('../controllers/guardianController')


router.get('/', guardianController.getGuardians)




module.exports = router