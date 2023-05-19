exports.checkAdmin = (req, res, next) => {
    if(req.ucer.status == 'admin'){
        next();
    }else{
        res.json({dsc: 'No authorization on this page'})
    }
}
exports.checkTeacher = (req, res, next) => {
    if(req.ucer.status == 'teacher'){
        next();
    }else{
        res.json({dsc: 'No authorization on this page'})
    }
}