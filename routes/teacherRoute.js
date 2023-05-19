const { Router } = require('express')
const {
    getGroup,
    profile,
} = require('../controllers/teacherRoute')
const { token } = require('../middleware/token')
const { checkTeacher } = require('../middleware/checkRole')
const route = Router()


route.get('/', (req, res) =>{
    res.json({title: "teacher"})
} )
route.get('/:id',token, checkTeacher, getGroup)
route.get('/profile/:id',token, checkTeacher, profile)






module.exports = route