const mongoose=require('mongoose')

const EmployeeSchema=new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    image:String,
    salary:String,
    position:String
})

let Employee=mongoose.model("Employee",EmployeeSchema);
module.exports=Employee;