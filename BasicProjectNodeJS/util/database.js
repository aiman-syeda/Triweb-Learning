const mysql = require('mysql2');

const pool = mysql.createPool(           //add details 
    {
        host:"localhost",
        database:"User_Database", 
        user:"root",
        password:"" 
    }
);

module.exports = pool.promise();    /*ensures model connection with 
 database whenever code is executed*/

