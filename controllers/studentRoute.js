const Students = require("../models/Ucer")

exports.indexStudent = async (req, res)=>{
    const data = await Students.find({status:'student'}).sort({totalScore: -1}).limit(3)
    const ucer = await Students.findById(req.ucer.id, ["attendance"])
    res.json({topStudent: data, attendance: ucer})
}