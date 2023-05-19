const { Router } = require('express')
const {
    SignUp,
    SignIn,
    index
} = require('../controllers/auth')
const { checkLogin } = require('../middleware/checkLogin')
const route = Router()

route.get('/', index  )
route.post('/signUp', checkLogin, SignUp)
route.post('/signIn', checkLogin, SignIn)





module.exports = route