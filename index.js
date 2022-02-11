// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);
// const {Server, Socket} = require("socket.io")
// const io = new Server(server);
// const db  = require("mongoose")
// const PORT = process.env.PORT ||5000;
// db.connect("mongodb+srv://vievkyadav:guluthegreat@cluster0.tswwn.mongodb.net/users?retryWrites=true&w=majority")

// const schema = db.Schema({
//     username: String,
//     battery: String,
//     useros: String,
//     TimeAndDate: String
// })

// const users = db.model("users",schema)


// app.get("/", (req,res)=>{
//     res.sendFile(`${__dirname}/index.html`)
// })
// app.get("/home", (req,res)=>{
//     res.sendFile(`${__dirname}/index.html`)
// })
// io.on("connection",(socket)=>{
// socket.on("userinfo",(userinfo)=>{
// new users({battery: userinfo.userbattery, useros: userinfo.useros, username: userinfo.username, TimeAndDate: userinfo.datentime}).save()
// })

// })



// server.listen(PORT,()=>{})


const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const {Server, Socket} = require("socket.io")
const io = new Server(server)

const PORT = process.env.PORT ||5000;

app.get("/",(req,res)=>{
res.sendFile(`${__dirname}/index.html`,()=>{})
})

io.on("connection",(socket)=>{  
    socket.setMaxListeners(8);
    socket.on("clickedbutton",(r)=>{
        socket.broadcast.emit("hehe",r)
   

}) 
    })

server.listen(PORT,()=>{console.log("server is live");})














