const ComInternOpen = require("../model/CompIntOpenSchema")
const Student = require("../model/studentSchema")
const StudentApply = async (req, res) => {

    try {
        const { Jobid,StudentId } = req.body;
        const internshipDetails = await ComInternOpen.findOne({_id:Jobid})
        console.log(internshipDetails)
        const newData=internshipDetails.students;
        for(var i=0;i<newData.length;i++){
            if(newData[i]==={StudentId}) 
            return res.status(404).json("Already Applied");
        }
        // newData.map((dat)=>{
        //     if(dat===StudentName)
        //     return res.status(404).json("Already Present");
        // });
            const updatedValue = await internshipDetails.updateOne({ $push: { students: StudentId } })
            return res.status(201).json({ message: "Applied Sucessfully" });
    } catch (err) {
        console.log(err);
       return  res.status(500).json({ Error: "Failed To Apply" });
    }
}
module.exports={StudentApply}