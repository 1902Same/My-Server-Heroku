var express = require("express");

var PORT = process.env.PORT || 5000

var server = express();

server.get("/", (req,res,next)=>{
    console.log("Someone Else");
    res.send("Menu: /n What do you want? /n Food /n Water")
})

server.get("water", (req,res,next)=>{
    console.log("Someone asking for water");
    res.send("Here is water")
})

server.listen(PORT, ()=>{
    console.log("Server is running on " + PORT);
})