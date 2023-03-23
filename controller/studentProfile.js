const Student = require("../model/studentSchema")
const jwt = require("jsonwebtoken")
const studentProfile = async (req, res) => {
    var token = req.headers.authorization;
    token = token.split(' ')[1];
    const decodedToken = jwt.decode(token);
    // console.log(decodedToken._id);
    const company = await Student.findOne({ _id: decodedToken._id})
    res.json(company);
}
module.exports = { studentProfile }