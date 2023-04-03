const express = require("express");
const routes = express.Router();
const cors = require("cors");

routes.get("/",(req, res, next)=>{
  res.render("index.ejs")
})

module.exports = routes