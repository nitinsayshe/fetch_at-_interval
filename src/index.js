const express = require("express");
const mongoose = require("mongoose")
const app = express()
const { getData } = require("./conrtoller/matchController")



app.use(express.json())
app.use(express.urlencoded({ extended: true }))



const url = "mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/match-task"
mongoose.connect(url, { useNewUrlParser: true })
    .then(() => console.log("Mongodb is connected "))
    .catch((err) => console.log(err))



app.get("/",getData)


app.listen(process.env.PORT || 3000, function () {
    console.log("Express is running on port " + (process.env.PORT || 3000))
})


