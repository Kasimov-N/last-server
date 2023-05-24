const { Router } = require('express')
const {
    getGroup,
    profile,
    attendance,
} = require('../controllers/teacherRoute')
const { token } = require('../middleware/token')
const { checkTeacher } = require('../middleware/checkRole')
const route = Router()


route.get('/',token, (req, res) =>{
    res.json({title: "teacher"})
} )
route.get('/group/:id',token, checkTeacher, getGroup)
route.get('/profile',token, checkTeacher, profile)
route.get('/attendance',token, checkTeacher, attendance)







module.exports = route