const student = require("../model/studentSchema");
const studentLogin = async (req, res)=>{
    try{
        const{email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Please fill both email & password"})
        }
        const studentLogin = await student.findOne({email:email})
        if(studentLogin && password !== studentLogin.password){
            return res.status(400).send({ message: 'Incorrect credentials' });
        }

        if(studentLogin){
            const tokenStudentLogin = await studentLogin.generateAuthToken();
            console.log(tokenStudentLogin);

            res.cookie("jwtokenstudent", tokenStudentLogin, {
                expires: new Date(Date.now() + 2589200000), 
                httpOnly: true
            });
            return res.status(400).send({ message: 'Student Login Sucessfull' });
        }
        
    } catch(err){
        console.log(err);
        res.status(500).json({ Error: "Failed to login" });
    }
}

module.exports = {studentLogin}