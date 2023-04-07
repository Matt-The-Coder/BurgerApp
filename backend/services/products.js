const db = require('../database/connection')

module.exports = () =>{
    const RetrieveProduct = async()=>{
        const query = "Select * from products";
        const result = await db(query)
        return result;
    }
    const InsertProduct = async()=>{
        const query = "Insert into product() values()";
        const result = await db(query)
        return result;
    }
  
    const DeleteProduct = async()=>{
        const query = "delete from product where id = ";
        const result = await db(query)
        return result;
    }
  
    const UpdateProduct = async()=>{
        const query = "update product set id = 3 where id = 2";
        const result = await db(query)
        return result;
    }
  


return {
    ret: RetrieveProduct(),
    ins: InsertProduct(),
    del: DeleteProduct(),
    upd: UpdateProduct()
}


}