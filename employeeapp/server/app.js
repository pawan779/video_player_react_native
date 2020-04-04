const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express();
const Employee = require('./Emlpoyee');

app.use(bodyParser.json());

const mongoUri = "mongodb+srv://pawan:FlfyKHFSfblW4lR2@cluster0-jn0dh.mongodb.net/test?retryWrites" +
        "=true&w=majority"

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true
})

mongoose
    .connection
    .on("connected", () => {
        console.log("connected to mongodb")
    })

app.post('/send-data', (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        position: req.body.position,
        salary: req.body.salary,
        image: req.body.image
    })
    employee
        .save()
        .then((data) => {
            res.json(data)
            console.log(data)
        })
        .catch((err) => {
            res.json(err)
        })

})

app.get('/',(req,res)=>{
    Employee.find({})
    .then((data)=>{
        res.json(data)
    })
})

app.put('/edit/:id',(req,res)=>{
    Employee.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((data)=>{
        Employee.findById({_id:req.params.id})
        .then((data)=>{
            res.json(data)
        })
    })

})

app.delete('/delete/:id', (req, res) => {
    Employee
        .findByIdAndRemove({_id: req.params.id})
        .then((data) => {
            res.json(data)
        })
        .catch((err) => {
            res.json(err)
        })
})

app.listen(3000, () => {
    console.log("server running")
})
