const Teachers = require('../models/Teachers')
const ucer = require('../models/ucer')


exports.getGroup = async (req, res) => {
    try {
        const data = await Teachers.findById(req.params.id, ["group"])
        res.json({ data })
    }
    catch (err) {
        res.json({ eror: 'Bunday o`qituvchi mavjud emas' })
    }
}
exports.profile = async (req, res) => {
    try {
        const data = await Teachers.findById(req.params.id)
        res.json({ data })
    }
    catch (err) {
        res.json({ eror: 'Bunday o`qituvchi mavjud emas' })
    }
}