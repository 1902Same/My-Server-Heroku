var express = require("express");

var PORT = process.env.PORT || 5000

var server = express();

server.get("/", (req,res,next)=>{
    console.log("Someone Else");
    res.send("Menu: What do you want? Food Water")
})

server.get("/water", (req,res,next)=>{
    console.log("Someone asking for water");
    res.send("Here is water :)")
})

server.get("/food", (req,res,next)=>{
    console.log("Someone asking for water");
    res.send("Here is Food :)")
})

server.listen(PORT, ()=>{
    console.log("Server is running on " + PORT);
})