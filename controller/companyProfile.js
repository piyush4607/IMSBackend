const newCompnay = require("../model/companySchema")
const jwt = require("jsonwebtoken")
const companyProfile = async (req, res) => {
    // try {
    //     const token = req.body.tokenCompanyLogin;
    //     if (!token) {
    //         return res.status(401).send({ error: 'Company Token Not authorized' });
    //     }

    //     const decode = jwt.verify(token, process.env.SECRET_KEY)

    //     const company = await newCompnay.findOne({ _id: decode._id, "tokens.token": token })
    //     if (!student) {
    //         return res.status(404).send({ error: 'Company not found' });
    //     }
    //     res.send(student);
    // } catch (err) {
    //     res.status(500).send({ error: 'Error finding Company Details' });
    // }
    let data = await newCompnay.find()
    res.json(data);
}
module.exports = { companyProfile }