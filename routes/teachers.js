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

router.get('/',token, checkAdmin, index)
router.get('/:id',token, checkAdmin, show)
router.post('/',token, checkAdmin, create)
router.delete('/:id',token, checkAdmin, remove)
router.put('/:id', token, checkAdmin, edit)

module.exports = router