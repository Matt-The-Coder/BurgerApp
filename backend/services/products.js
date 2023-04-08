const db = require('../database/connection')

module.exports = () => {
    const RetrieveProduct = async () => {
        try {
            const query = "SELECT * FROM products";
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
            const query = `INSERT INTO products (id, name, price) VALUES(null,'${name}', ${price})`;
            await db(query)
            return "Inserted Successfully!";
        } catch (error) {

            console.log(error)
            return false;
        }

    }

    const DeleteProduct = async (ProductID) => {
       try {
        const query = `DELETE FROM products WHERE id = ${ProductID}`;
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
            const query = `UPDATE products SET name = '${name}', price = ${price} WHERE id = ${id}`;
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