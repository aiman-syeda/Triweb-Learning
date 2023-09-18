
const db = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/util/database.js');


module.exports.insert = async (userData) => {
    let id=0;  
    //handle run time exception
    try{
        let query = "INSERT INTO `Users` (`name`, `email`, `password`, `remark`) VALUES (?, ?, ?, ?)";
       
        let result = await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
        id = result[0].insertId; 
    } catch (error){
        console.log(error);
        return false;
    }
    return id;

}

