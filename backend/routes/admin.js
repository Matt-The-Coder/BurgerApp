const express = require("express")
const routes = express.Router();
//Services 
const services = require("../services/products")
const {ret, ins, del, upd} = services();
routes.get("/admin", (req, res, next)=>{

    res.render("admin")
})

routes.post("/insertProduct", async (req, res)=>{
    const {name, price} = req.body;
    await ins({name: name, price: price})
   
})
routes.put("/updateProduct", async (req, res)=>{
    const {id, name, price} = req.body;
    
    await upd({id: id, name: name, price: price})
})
routes.delete("/deleteProduct", async (req, res)=>{
    const {id} = req.body;
    await del(id);
})

module.exports = routes