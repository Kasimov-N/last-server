const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Teachers = require('../models/Teachers');
const Students = require('../models/Students');

exports.index = (req, res) => {
    res.json({ status: 'SignUpTeacher - create teacher,SignInTeacher - token teacher' })
}
exports.SignUpTeach = async (req, res) => {
    const { firstName, lastName, phoneNumber, subject, email, password } = req.body;
    const data = await Teachers.findOne({ email })
    if (data) {
        res.json({ dsc: 'Bunday oqituvchi mavjud' })
    } else {
        if (firstName && lastName && phoneNumber && subject && email && password) {
            const hash = await bcrypt.hash(password, 12);
            const Teacher = await Teachers.create({ ...req.body, password: hash })
            res.json({ dsc: 'Teacher created', Teacher })
        } else {
            res.json({ dsc: 'Error' })
        }
    }
}
exports.SignInTeach = async (req, res) => {
    const { email, password } = req.body;
    const data = await Teachers.findOne({ email })
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
}

exports.SignUpStudent = async (req, res) => {
    const { firstName, lastName, phoneNumber, ParentsPhoneNumber, totalScore, email, password } = req.body;
    const data = await Students.findOne({ email })
    if (data) {
        res.json({ dsc: 'Bunday o`quvchi mavjud' })
    } else {
        if (firstName && lastName && phoneNumber || totalScore && ParentsPhoneNumber && email && password) {
            const hash = await bcrypt.hash(password, 12);
            const student = await Students.create({ ...req.body, password: hash })
            res.json({ dsc: 'Student created', student })
        } else {
            res.json({ dsc: 'Error' })
        }
    }
}
exports.SignInStudent = async (req, res) => {
    const { email, password } = req.body;
    const data = await Students.findOne({ email })
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


