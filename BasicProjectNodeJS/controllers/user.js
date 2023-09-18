const userModel = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/models/user.js')


//Registration
module.exports.register = async (req,res) =>{
    let insertedId = await userModel.insert(req.body);
    if (insertedId > 0){
        res.send({status:'User Registeration Successfull',data:{id:insertedId}});
    }else{
        res.send({status:'error',message:'User Registration failed'});
    }
};

//get data
module.exports.get = async (req,res) =>{
    let Data = await userModel.get(req.body);
    if (Data) {
        res.send({status:'User Data found',data:Data});
    }else{
        res.send({status:'error',message:'User Not Found'});
    }
    
};



//Update data
module.exports.update = async (req,res) =>{
    let status = await userModel.update(req.body);
    if (status) {
        res.send({status:'Success',message:"User Data updated"});
    }else{
        res.send({status:'error',message:'User Data not updated'});
    }
};


//Delete data
module.exports.delete = async (req,res) =>{
    let status = await userModel.delete(req.body);
    if (status) {
        res.send({status:'Success',message:"User data deleted"});
    }else{
        res.send({status:'error',message:'User data not deleted'});
    }
};