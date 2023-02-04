const mongoose = require("mongoose");
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");

dotenv.config({path: "./config.env"})
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_no: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirm_password: {
        type: String,
        required: true
    },
    tokens:[
        {
            token:{
                type:String,
                require:true
            }
        }
    ]
})

//genrating ayth token

studentSchema.methods.generateAuthToken = async function(){
    try{
        let tokenlogin = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:tokenlogin});
        await this.save();
        return tokenlogin;
    }catch(err){
        console.log(err)
    }
}

const StudentSCHEMA = mongoose.model("student", studentSchema);
module.exports = StudentSCHEMA;