const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken")
const newCompnay = require("../model/companySchema")

var jwtauth = (req, res, next)=>{
     var token = req.headers.authorization;
     token = token.split(' ')[1];
     jwt.verify(token, process.env.SECRET_KEY, function(err,decode){
         if(err){
             res.send({message: "invalid token"})
         }else{
             next();
         } 
     })

    // try{
    //     const token = req.header('Authorization').replace('Bearer ', '')
    //     const decode = jwt.verify(token, process.env.SECRET_KEY)
    //     const company = await newCompnay.findById(decode._id) 

    //     if(!company){
    //         throw new Error()
    //     }

    //     req.company = company;
    //     req.token = token;
    // } catch(error){
    //     res.status(401).send({error:'please authenicate'})
    // }
}

const studentRegister = require("../controller/studentRegister")
const studentLogin = require("../controller/studentLogin")

const companyRegister = require("../controller/companyRegister")
const companyLogin = require("../controller/companyLogin")

const studentProfile = require("../controller/studentProfile")
const companyProfile = require("../controller/companyProfile")


const companyIntershipOpen = require("../controller/CompanyIntOpen")
const studentapply = require("../controller/StudentApply")
require("../index")


router.post("/studentRegister", studentRegister.studentRegister)
router.post("/studentLogin", studentLogin.studentLogin)
router.get("/studentProfile", jwtauth,studentProfile.studentProfile)
router.post("/studentapply", studentapply.StudentApply)

router.post("/companyRegister", companyRegister.companyRegister)
router.post("/companyLogin", companyLogin.companyLogin)
router.get("/companyProfile", jwtauth,companyProfile.companyProfile)
router.post("/companyInternshipOpen", companyIntershipOpen.internshipRegister)

module.exports = router;