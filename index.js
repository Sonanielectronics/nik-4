var express = require("express");
var app = express();

app.get("/home",async (req,res)=>{
    res.send("this is home page");
});

app.listen(3500, ()=>{
    console.log("okay");
});