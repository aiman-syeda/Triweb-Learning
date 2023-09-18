
const db = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/util/database.js');


module.exports.insert = async (userData) => {
    let id = 0;
    //handle run time exception
    try{
        let query = "INSERT INTO `Users` (`name`, `email`, `password`, `remark`) VALUES (?, ?, ?, ?)";
       
        let result = await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
        id = result[0].insertId; 
        //console.log(id); 
    } catch (error){
        console.log(error);
        return false;
    }
    return id;

}

module.exports.get = async (userData) => {
    let retData = '';
    try {
        let query = "SELECT * FROM Users WHERE id= ?";

        let result = await db.execute(query,[userData.id]);
        retData = result[0][0];
    }catch (error) {
        console.log(error);
        return false;
    }
    return retData;
}

module.exports.update = async (userData) => {
    
    try {
        let query = "UPDATE Users SET password = ? WHERE id = ?";

        let result = await db.execute(query,[userData.password,userData.id]);
        return true;
    } catch (error) {
        console.log(error);
        return false;
    }
}