const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv");

const companySchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true,
        unique: true
      },
      phoneNumber: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      },
      companyLogo: {
        type: String,
        required: false
      },
      password: {
        type: String,
        required: true
      },
      confirmPassword: {
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

companySchema.methods.generateAuthToken = async function(){
    try{
        let tokenlogin = jwt.sign({_id:this._id}, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({token:tokenlogin});
        await this.save();
        return tokenlogin;
    }catch(err){
        console.log(err)
    }
}
module.exports = mongoose.model("company", companySchema);