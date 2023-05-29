const bcrypt = require('bcrypt')
const Teachers = require("../models/Ucer")

exports.index = async (req, res) => {
    const data = await Teachers.find({ status: "teacher" })
    if (data) {
        res.json({ title: 'All teacher', length: data.length, data })
    }
}
exports.show = async (req, res) => {
    const data = await Teachers.findById(req.params.id)
    if (data) {
        res.json({ title: 'Special teacher', data })
    }
}
exports.create = async (req, res) => {
    try {
        let { firstName, lastName, email, phoneNumber, status, password, subject } = req.body
        if (firstName && lastName && email && status && phoneNumber && password && subject) {
            const checkEmail = await Teachers.find({ email })       
            if (!checkEmail) {
                const hash = await bcrypt.hash(password, 12);
                let teacher = new Teachers({
                    firstName,
                    lastName,
                    email,
                    status,
                    phoneNumber,
                    password: hash,
                    subject
                })
                teacher.save()
                    .then(data => {
                        if (data) {
                            res.json({ title: 'Teacher created', data: data })
                        }
                    })
            } else {
                res.json('Email band')
            }
        } else {
            res.json('Malumot toliq emas')
        }

    } catch (err) {
        res.json('Xatolik')
    }
}
exports.remove = async (req, res) => {
    const data = await Teachers.findByIdAndDelete(req.params.id)
    if (data) {
        res.json({ title: 'Teacher Deleted' })
    }
}
exports.edit = async (req, res) => {
    let { firstName, lastName, email, phoneNumber, password, subject } = req.body
    if (firstName || lastName || email || phoneNumber || password || subject) {
        const data = await Teachers.findByIdAndUpdate(req.params.id, req.body)
        if (data) {
            res.json({ title: 'Teacher Updated', data: data })
        }
    } else {
        res.json('Malumot yoq')
    }
}