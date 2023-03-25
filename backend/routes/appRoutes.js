const express = require("express");
const routes = express.Router();
const cors = require("cors");


routes.post("/try", cors(), (req, res, next)=>{
  const {username, password} = req.body
  console.log("Username: " + username)
  console.log( req.body)
  res.status(200).json({message: "Well Done!"})
})

routes.get("/try", cors(), (req, res, next)=>{
  const account = {
       username: "Ralph",
       password:"12345"
  }
  res.json(account)
})


routes.get("/",(req, res, next)=>{
  res.render("index.ejs")
})

routes.get("/login", (req, res, next)=>{
  res.render("login.ejs")
})

routes.get("/registration",(req, res, next)=>{

  const {name, age, gender} = req.query
  res.render('register.ejs', {data: [name, age, gender]})

})

module.exports = routes