const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Teachers = require('../models/Ucer');
const Students = require('../models/Ucer');

exports.index = (req, res) => {
    res.json({ status: 'Auth' })
}
exports.SignUp = async (req, res) => {
    const { firstName, lastName, phoneNumber, subject, email, password, status, ParentsPhoneNumber, totalScore } = req.body;
    const data = await Teachers.findOne({ email })
    if (data) {
        if (data.status == 'teacher') {
            res.json({ dsc: 'Bunday o`qituvchi mavjud' })
        } else if (data.status == 'student') {
            res.json({ dsc: 'Bunday o`quvchi mavjud' })
        }
    } else {
        if (status == 'teacher') {
            if (firstName && lastName && phoneNumber && subject && email && password && status) {
                const hash = await bcrypt.hash(password, 12);
                const Teacher = await Teachers.create({ ...req.body, password: hash })
                res.json({ dsc: 'Teacher created', Teacher })
            } else {
                res.json({ dsc: 'Error' })
            }
        } else if (status == 'student') {
            if (firstName && lastName && phoneNumber || totalScore && ParentsPhoneNumber && email && password && status) {
                const hash = await bcrypt.hash(password, 12);
                const student = await Students.create({ ...req.body, password: hash })
                res.json({ dsc: 'Student created', student })
            } else {
                res.json({ dsc: 'Error' })
            }
        }
    }
}
exports.SignIn = async (req, res) => {
    const { email, password, status } = req.body;
    if (status == 'teacher') {
        const data = await Teachers.findOne({ status: 'teacher', email })
        if (!data) {
            res.json({ dsc: 'Bunday oqituvchi mavjud emas' })
        } else {
            const isValid = await bcrypt.compare(password, data.password)
            if (isValid) {
                const payload = {
                    id: data.id,
                    status: data.status
                }
                const token = await jwt.sign(payload, 'Key', { expiresIn: '1h' })
                res.json({ dsc: 'Success', token })
            } else {
                res.json({ dsc: 'Parol xato' })
            }
        }
    } else if (status == 'student') {
        if (!data) {
            res.json({ dsc: 'Bunday oquvchi mavjud emas' })
        } else {
            const isValid = await bcrypt.compare(password, data.password)
            if (isValid) {
                const payload = {
                    id: data.id,
                    status: data.status
                }
                const token = await jwt.sign(payload, 'Key', { expiresIn: '1h' })
                res.json({ dsc: 'Success', token })
            } else {
                res.json({ dsc: 'Parol xato' })
            }
        }
    }
}


