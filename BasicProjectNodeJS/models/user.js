
const db = require('/Users/syeda/Documents/Aiman Syeda/Node JS app_2/util/database.js');


module.exports.insert = async (userData) => {
    
    //handle run time exception
    try{
        let query = "INSERT INTO `Users` (`name`, `email`, `password`, `remark`) VALUES (?, ?, ?, ?)";
       
        let result = await db.execute(query,[userData.name,userData.email,userData.password,userData.remark]);
        console.log(result);  
    } catch (error){
        console.log(error);
        return false;
    }
    return true;

}

