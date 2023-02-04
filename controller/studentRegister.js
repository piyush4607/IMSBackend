const student = require("../model/studentSchema");
const studentRegister = async (req, res) => {
    const { name, email, phone_no, gender, password, confirm_password } = req.body;
    if (!name || !email || !phone_no || !gender || !password || !confirm_password) {
        return res.status(422).json({ Error: "Please fill the form properly" });
    }

    try {
        const studentExist = await student.findOne({ email: email });
        if (studentExist) {
            return res.status(422).json({ Error: "Email already exist" });
        }
        const newStudent = new student({ name, email, phone_no, gender, password, confirm_password });
        await newStudent.save();
        res.status(201).json({ message: "User registered sucessfully" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Failed to register" });
    }
}

module.exports = {studentRegister}
