exports.checkLogin = async(req, res, next)=> {
    const {email, password} = req.body;
    if(email && password){
        next()
    }else{
        res.json({title: 'Pasword  or login not found'} )
    }
}