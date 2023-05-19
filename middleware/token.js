const jwt = require('jsonwebtoken')
exports.token = async (req, res, next) => {
    const token = req.query.token || req.headers.authorization
    if(token){
        let decoded = await jwt.verify(token, 'Key')
        let ucer = {}
        ucer.id = decoded.id
        ucer.status = decoded.status
        req.ucer = ucer
        next()
    }else{
        try{
            res.json({dsc: 'Token is not defined'})
        }
        catch(err){
            res.json({title: 'error', error: err})
        }
    }
}