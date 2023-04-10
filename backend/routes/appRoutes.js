const express = require("express");
const routes = express.Router();
const cors = require("cors");
//services
const services = require("../services/products")
const {ret, ins, del, upd} = services ()
routes.get("/", async (req, res, next)=>{
  const ProductData = await ret();
  res.render("index", {data: ProductData})
})

module.exports = routes