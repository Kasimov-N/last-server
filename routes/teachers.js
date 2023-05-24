const { Router } = require('express')
const { 
    index, 
    create,
    show,
    remove,
    edit
 } = require('../controllers/teachers')
const { token } = require('../middleware/token')
const { checkAdmin } = require('../middleware/checkRole')
const router = Router()

router.get('/',checkAdmin, index)
router.get('/:id', checkAdmin, show)
router.post('/', checkAdmin, create)
router.delete('/:id', checkAdmin, remove)
router.put('/:id',  checkAdmin, edit)

module.exports = router