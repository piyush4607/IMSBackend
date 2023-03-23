const newCompnay = require("../model/companySchema")
const jwt = require("jsonwebtoken")

const companyProfile = async (req, res) => {
    var token = req.headers.authorization;
    token = token.split(' ')[1];
    const decodedToken = jwt.decode(token);
    // console.log(decodedToken._id);
    const company = await newCompnay.findOne({ _id: decodedToken._id})
    res.json(company);
}
module.exports = { companyProfile }