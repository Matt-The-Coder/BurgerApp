const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path")
const ejs = require("ejs")
const createTable = require("./backend/database/table")
//routes
const homeRoute = require("./backend/routes/appRoutes")
const adminRoute = require("./backend/routes/admin")
const services = require("./backend/services/products")
const {ret, ins, del, upd} = services();
//middleware
// git add . && git commit -m "New Update" && git push
const db = require("./backend/database/connection")
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: "true"}))
//Front End
//For html custom template engine
// app.engine("html", ejs.renderFile)
// app.set("view engine", "html");
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "./frontend/views"))
//for static or styles
app.use("/static", express.static(path.join(__dirname, "./frontend/static")))
//server
app.listen(PORT, async ()=>{
    console.log(`Server started at port ${PORT}`)
    // TABLE CREATION 
  await createTable() 
  // console.log(await db("ALTER TABLE products ADD COLUMN PicFileLocation varchar(255)"))
  // console.log(await db("show tables"))
  console.log(await ret()) 
})
//Cors
const cors = require("cors")
app.use(cors())
app.use("/", cors(), homeRoute, adminRoute)


