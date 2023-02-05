const newStudent = require("../model/studentSchema")
const jwt = require("jsonwebtoken")
const studentProfile = async (req, res) => {
    try {
        const token = req.body.jwtokenstudent;
        if (!token) {
            return res.status(401).send({ error: 'Student Token Not authorized' });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY)

        const student = await newStudent.findOne({ _id: decode._id, "tokens.token": token })
        if (!student) {
            return res.status(404).send({ error: 'Student not found' });
        }
        res.send(student);
    } catch (err) {
        res.status(500).send({ error: 'Error Finding Student Details' });
    }
}
module.exports = { studentProfile }