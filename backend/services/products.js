const db = require('../database/connection')

module.exports = () =>{
    const RetrieveProduct = async()=>{
        try {
            const query = "Select * from products";
            const result = await db(query)
            return result;
        } catch (error) {
            console.log(error)
        }
       
    }
    const InsertProduct = async(ProductName, ProductPrice)=>{
        
        try {
            const query = `Insert into product(name, price) values('${ProductName}', ${ProductPrice})`;
            const result = await db(query)
            return result;
        } catch (error) {
            console.log(error)
        }
        
    }
  
    const DeleteProduct = async(ProductID)=>{
        const query = `delete from product where id = ${ProductID}`;
        const result = await db(query)
        return result;
    }
  
    const UpdateProduct = async()=>{
        const query = "update product set price = 3 where id = 2";
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