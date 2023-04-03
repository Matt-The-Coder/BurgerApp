const express = require('express');
const bodyparser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
const path = require("path")
const ejs = require("ejs")
const services = require("./backend/services/products")

//middleware

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
    const {RetrieveProduct, InsertProduct, DeleteProduct, UpdateProduct} = await services();
    console.log(await RetrieveProduct())
})
//Cors
const cors = require("cors")
app.use(cors())
//routes
const routes = require("./backend/routes/appRoutes")
app.use(routes)
