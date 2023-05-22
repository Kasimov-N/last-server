const Students = require("../models/Students")

exports.indexStudent = async (req, res)=>{
    const data = await Students.find({}).sort({totalScore: -1}).limit(3)
    const ucer = await Students.findById(req.ucer.id, ["attendance"])
    res.json({topStudent: data, attendance: ucer})
}