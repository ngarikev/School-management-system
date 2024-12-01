const express = require('express')
const router = express.Router()


const yearTermController = require('../controllers/yearTermController')

router.get('/', yearTermController.getYearTerms)


module.exports = router