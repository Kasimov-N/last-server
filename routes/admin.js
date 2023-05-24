const { Router } = require('express')
const { admin } = require('../controllers/admin')
const { checkAdmin } = require('../middleware/checkRole')
const router = Router()

router.get('/',checkAdmin, admin)

module.exports = router