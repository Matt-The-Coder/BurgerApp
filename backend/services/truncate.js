const db = require("../database/connection")


module.exports= async ()=>{
    const query = "TRUNCATE TABLE products";
     await db(query)
  
}