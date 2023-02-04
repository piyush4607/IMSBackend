const company = require("../model/companySchema")
const companyRegister = async (req,res) =>{
    const {companyName, email, phoneNumber, address, companyLogo, password, confirmPassword} = req.body;
    if(!companyName || !email || !phoneNumber || !address || !companyLogo || !password || !confirmPassword){
        return res.status(400).json({Error: "Please fill the form properly"})
    }

    try{
        const companyExist = await company.findOne({email:email});
        if(companyExist){
            return res.status(400).json({Error: "Email already exist"})
        }
        const newCompany = new company({companyName, email, phoneNumber, address, companyLogo, password, confirmPassword})
        await newCompany.save();
        res.status(201).json({ message: "Company registered sucessfully" });
    }catch(err){
        console.log(err);
        res.status(500).json({ Error: "Failed to register" });
    }
}

module.exports = {companyRegister}