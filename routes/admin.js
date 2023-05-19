const { Router } = require('express')
const { admin } = require('../controllers/admin')
const { token } = require('../middleware/token')
const { checkAdmin } = require('../middleware/checkRole')
const router = Router()

router.get('/',token, checkAdmin, admin)

module.exports = router