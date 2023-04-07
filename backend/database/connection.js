const mysql = require('mysql')
const db = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user: 'b0e89b7ba9ad89',
    password: '5fdd47a0',
    database: 'heroku_f4f1e018f8b1b47'
})

module.exports = (query)=>{
    return new Promise((resolve, reject)=>{
        db.getConnection((error, connection)=>{
            if(error) reject(error);
            connection.query(query, (error, result)=>{
              if(error){
                 reject(error)
              } else{
                resolve(result)     
                   }
                   connection.release()
            }
            )
        })
    })
}