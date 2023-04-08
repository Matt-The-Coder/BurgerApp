const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path")
const ejs = require("ejs")
//Services 
const services = require("./backend/services/products")
const {ret, ins, del, upd} = services();
// Database
const createTable = require("./backend/database/table")
//middleware
// git add . && git commit -m "New Update" && git push
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
    await ins({name: "New Product", price: 300})
    await ins({name: "New Product 2", price: 400})
     console.log(await ret())
})
//Cors
const cors = require("cors")
app.use(cors())
//routes
const routes = require("./backend/routes/appRoutes")
app.use(routes)
