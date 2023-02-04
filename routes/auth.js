const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const jwt = require("jsonwebtoken")

const studentRegister = require("../controller/studentRegister")
const studentLogin = require("../controller/studentLogin")

const companyRegister = require("../controller/companyRegister")
const companyLogin = require("../controller/companyLogin")

require("../index")


router.post("/studentRegister", studentRegister.studentRegister)
router.post("/studentLogin", studentLogin.studentLogin)

router.post("/companyRegister", companyRegister.companyRegister)
router.post("/companyLogin", companyLogin.companyLogin)

module.exports = router;