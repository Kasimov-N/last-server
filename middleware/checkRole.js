require('dotenv').config()
exports.checkAdmin = (req, res, next) => {
        if (req.query.password == process.env.password ||req.headers.password == process.env.password ) {
            next();
        } else {
            res.json({ dsc: 'No authorization on this page' })
        }
}
exports.checkTeacher = (req, res, next) => {
    if (req.ucer.status == 'teacher') {
        next();
    } else {
        res.json({ dsc: 'No authorization on this page' })
    }
}
exports.checkStudent = (req, res, next) => {
    if (req.ucer.status == 'student') {
        next();
    } else {
        res.json({ dsc: 'No authorization on this page' })
    }
}