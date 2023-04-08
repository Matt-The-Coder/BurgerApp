const db = require('../database/connection')

module.exports = () => {
    const RetrieveProduct = async () => {
        try {
            const query = "Select * from products";
            const result = await db(query)
            return result;
        } catch (error) {
            console.log(error)
            return [];
        }

    }
    const InsertProduct = async (CreateObj) => {

const {name, price} = CreateObj;
        try {
            const query = `Insert into products (id, name, price) values(null,'${name}', ${price})`;
            await db(query)
            return "Inserted Successfully!";
        } catch (error) {

            console.log(error)
            return false;
        }

    }

    const DeleteProduct = async (ProductID) => {
       try {
        const query = `delete from products where id = ${ProductID}`;
        await db(query)
        return "Deleted Successfully!";
       } catch (error) {
        console.log(error)
        return false;
       }
        
    }

    const UpdateProduct = async (UpdateObj) => {
  const {id, name, price} = UpdateObj
        try {
            const query = `update products set name = ${name}, price = ${price} where id = ${id}`;
            await db(query)
            return "Updated Successfully!";
        } catch (error) {
            console.log(error)
            return false;
        }
      
    }



    return {
        ret: RetrieveProduct,
        ins: InsertProduct,
        del: DeleteProduct,
        upd: UpdateProduct
    }


}