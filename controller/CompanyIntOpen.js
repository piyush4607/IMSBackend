const CompanyIntOpen = require("../model/CompIntOpenSchema")
const internshipRegister = async (req, res) => {
  const { role, stipend } = req.body;

  if (!role || !stipend) {
    return res.status(400).json({ Error: "Please fill the form properly" });
  }

  try {
    const newInternship = new CompanyIntOpen({ role, stipend });
    await newInternship.save();
    res.status(201).json({ message: "Internship registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ Error: "Failed to register" });
  }
};

module.exports = { internshipRegister };