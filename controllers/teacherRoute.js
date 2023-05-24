const Students = require('../models/Ucer')
const Teachers = require('../models/Ucer')


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
        const data = await Teachers.findById(req.ucer.id)
        res.json({ data })
    }
    catch (err) {
        res.json({ eror: 'Bunday o`qituvchi mavjud emas', err })
    }
}
exports.attendance = async (req, res) => {
    try {
        req.body.data.map(async item => {
            const ucer = await Students.findById(item.id)
            if (item.id && item.status && item.date && item.score) {
                const data = await Students.findByIdAndUpdate(item.id, {
                    $push: {
                        attendance: {
                            status: item.status,
                            date: item.date,
                            score: item.score
                        }
                    }
                })
                res.json({ title: 'Succesful', ucer })
            }
            else {
                res.json({ title: 'Error', dsc: "Ma'lumot to'liq emas" })
            }
        })
    }
    catch (err) {
        res.json({ err })
    }
}