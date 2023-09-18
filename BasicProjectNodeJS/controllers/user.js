const userModel = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/models/user.js')


//Registration
module.exports.register = async (req,res) =>{
    let insertedId = await userModel.insert(req.body)
    if (insertedId > 0){
        res.send({status:'Success',data:{id:insertedId}});
    }else{
        res.send({status:'error',message:'User Registration failed'});
    }
};

//get data
module.exports.get = (req,res) =>{
    res.send(req.body);
};


//Update data
module.exports.update = (req,res) =>{
    res.send(req.body);
};


//delete data
module.exports.delete = (req,res) =>{
    res.send(req.body);
};