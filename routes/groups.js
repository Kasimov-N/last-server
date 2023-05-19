const { Router } = require('express')
const { 
    index, 
    create,
    show,
    remove,
    update
 } = require('../controllers/groups')
const { token } = require('../middleware/token')
const { checkAdmin } = require('../middleware/checkRole')
const router = Router()

router.get('/',token, checkAdmin, index)
router.get('/:id',token, checkAdmin, show)
router.post('/',token, checkAdmin, create)
router.delete('/',token, checkAdmin, remove)
router.put('/',token, checkAdmin, update)

module.exports = router