const ComInternOpen = require("../model/CompIntOpenSchema")
const Student = require("../model/studentSchema")
const StudentApply = async (req, res) => {

    try {
        const { id,StudentName } = req.body;
        const detail = await ComInternOpen.findOne({ _id:id})
        console.log(detail.students)
        const newData=detail.students;
        for(var i=0;i<newData.length;i++){
            if(newData[i]===StudentName) 
            return res.status(404).json("Already Applied");
        }
        // newData.map((dat)=>{
        //     if(dat===StudentName)
        //     return res.status(404).json("Already Present");
        // });
            const updatedValue = await detail.updateOne({ $push: { students: StudentName } })
            return res.status(201).json({ message: "Applied Sucessfully" });
    } catch (err) {
        console.log(err);
       return  res.status(500).json({ Error: "Failed To Apply" });
    }
}
module.exports={StudentApply}