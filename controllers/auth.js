const ucer = require('../models/ucer')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

exports.SignUp = async (req, res) => {
    const { login, password } = req.body;
    const data = await ucer.findOne({ login })
    if (data) {
        res.json({ dsc: 'Bunday oqituvchi mavjud' })
    } else {
        const hash = await bcrypt.hash(password, 12);
        const ucer = await ucer.create({ ...req.body, password: hash })
        res.json({ dsc: 'ucer created', ucer })
    }
}
exports.index = (req, res) =>{
    res.json({status: 'Sign up and Sing in'})
}
exports.SignIn = async (req, res) => {
    const { login, password } = req.body;
    const data = await ucer.findOne({ login })
    if (!data) {
        res.json({ dsc: 'Bunday oqituvchi mavjud emas' })
    } else {
        const isValid = await bcrypt.compare(password, data.password)
        if (isValid) {
            const payload = {
                id: data.id,
                status: data.status
            }
            const token = await jwt.sign(payload, 'Key',{ expiresIn: '1h' })
            res.json({ dsc: 'Success', token })
        } else {
            res.json({ dsc: 'Parol xato' })
        }
    }
}