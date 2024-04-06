
const express = require("express")
const app =express()

app.listen(3000,()=>{
    console.log("https//localhost:3000")
})

app.get("/get/",async(reqest,response)=>{
    console.log("kk")
    response.send("{name:shiva,age:20,sex:M}")
})