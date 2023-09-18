const userModel = require('/Users/syeda/Documents/Aiman Syeda/Node JS app_2/models/user.js')


//Registration
module.exports.register = async (req,res) =>{
    let response = await userModel.insert(req.body)
    console.log(response);
    res.send(req.body);
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