const mysql = require('mysql')
const db = mysql.createPool({
    host: 'r4wkv4apxn9btls2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'o4q0xmco49a27gfh',
    password: 'ulap93u072nrxank',
    database: 'mzj4u1ffhgxu49ed',
    port: "3306"
})

module.exports = (sql)=>{
    return new Promise((resolve, reject)=>{
        db.getConnection((error, connection)=>{
            if(error) reject(error);
            connection.query(sql, (error, result)=>{
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