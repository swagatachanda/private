// const exp = require("constants")
const mongoose = require("mongoose")
const express= require("express")
const Apiroutes = require("./routes/apiroutes")
const app=express()
require("dotenv").config()

app.use(express.static(__dirname+'/css'))
app.use(express.static(__dirname+'/images'))
app.use(express.static(__dirname+'/js'))
app.set('view engine', 'ejs')

app.use("/api",Apiroutes)

app.get("/",(req,res)=>{
    res.render("raisa")
})

app.get("/sjk", (req,res)=>{
    res.render("sjk")
})

app.get("/end", (req,res)=>{
    res.render("endpage")
})

mongoose.connect(process.env.DB_CONNECTION,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

app.listen(process.env.PORT || 3000 )