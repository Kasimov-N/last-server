const { Router } = require('express')
const { indexStudent } = require('../controllers/studentRoute')
const { token } = require('../middleware/token')
const { checkStudent } = require('../middleware/checkRole')
const route = Router()


route.get('/',token,checkStudent, indexStudent )






module.exports = route