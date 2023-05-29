const { Router } = require('express')
const { 
    index, 
    create,
    show,
    remove,
    update
 } = require('../../controllers/groups')
const { checkAdmin } = require('../../middleware/checkRole')
const router = Router()

router.get('/', checkAdmin, index)
router.get('/:id', checkAdmin, show)
router.post('/', checkAdmin, create)
router.delete('/', checkAdmin, remove)
router.put('/', checkAdmin, update)

module.exports = router