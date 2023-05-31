const { Router } = require('express')
const {
    index,
    create,
    show,
    remove,
    edit,
    addStudentToGroup
} = require('../../controllers/students')
const { token } = require('../../middleware/token')
const { checkAdmin } = require('../../middleware/checkRole')
const router = Router()

router.post('/manage', addStudentToGroup)

router.get('/', checkAdmin, index)
router.get('/:id', checkAdmin, show)
router.post('/', checkAdmin, create)
router.delete('/:id', checkAdmin, remove)
router.put('/:id', checkAdmin, edit)

module.exports = router