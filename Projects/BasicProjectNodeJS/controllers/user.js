const userModel = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/models/user.js')



//Registration
module.exports.register = async (req,res) =>{
    console.log(req.body);
    try{
        let result = await userModel.create(req.body);
        res.send({status:'User Registeration Successfull',data:{id:result.dataValues.id}});
    }catch(error){
        res.send({status:'error',message:'User Registration failed'});
    }
    
};

//get data
module.exports.get = async (req,res) =>{
    try{
        let Data = await userModel.findbypk(req.body.id);
        res.send({status:'User Data found',data:Data});
    }catch (error) {
        res.send({status:'error',message:'User Not Found'});
    }
     
};



//Update data
module.exports.update = async (req,res) =>{
    try {
        let user = await userModel.findbypk(req.body.id);
        user.password = req.body.password;
        await user.save();
        res.send({status:'Success',message:"User Data updated"});
    } catch (error) {
        res.send({status:'error',message:'User Data not updated'});
    }
     
    
};


//Delete data
module.exports.delete = async (req,res) =>{
    try{
        let user = await userModel.findbypk(req.body);
        await user.destroy();
        res.send({status:'Success',message:"User data deleted"});
    } catch(error){
        res.send({status:'error',message:'User data not deleted'});
    }
};