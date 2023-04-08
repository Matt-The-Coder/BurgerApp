const db = require('./connection')

module.exports = async ()=>{
    const ProductsTableQuery = `
    CREATE TABLE products (id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(255) NOT NULL, price INT NOT NULL, PRIMARY KEY(id));`

    return await db(ProductsTableQuery)
}