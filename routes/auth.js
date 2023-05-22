const { Router } = require('express')
const {
    index,
    SignInTeach,
    SignUpTeach,
    SignUpStudent,
    SignInStudent
} = require('../controllers/auth')
const { checkLogin } = require('../middleware/checkLogin')
const route = Router()

route.get('/', index  )
route.post('/signUpTeacher', checkLogin, SignUpTeach)
route.post('/signInTeacher', checkLogin, SignInTeach)
route.post('/signUpStudent', checkLogin, SignUpStudent)
route.post('/signInStudent', checkLogin, SignInStudent)





module.exports = route