const mysql = require('mysql')
const db = mysql.createPool({
    host: 'mysql-121467-0.cloudclusters.net',
    user: 'admin',
    password: 'pMtpAW5A',
    database: 'products',
    port: '10022'
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