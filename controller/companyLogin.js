const company = require("../model/companySchema")
const companyLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Please fill both email & password" })
        }
        const companyLogin = await company.findOne({ email: email })
        if (companyLogin && password !== companyLogin.password) {
            return res.status(400).send({ message: 'Incorrect credentials' });
        }
        if (companyLogin) {
            const tokenCompanyLogin = await companyLogin.generateAuthToken();
            console.log(tokenCompanyLogin);
            res.cookie("jwtokencompany", tokenCompanyLogin, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            });
            return res.status(400).send({ message: 'Company Login Sucessfull' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ Error: "Failed to login" });
    }
}

module.exports = { companyLogin }