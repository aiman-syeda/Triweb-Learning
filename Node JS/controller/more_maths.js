module.exports.even_odd = (req,res) => {
    if (req.body.number % 2 == 0){
        res.send(`${req.body.number} is an even number`);
    }
    res.send(`${req.body.number} is an odd number`);
}


module.exports.compare_nums = (req,res) => {
    let x = req.body.num1;
    let y = req.body.num2;
    let z = req.body.num3;
    if (x > y){
        if (x > z) {
            res.send(`num1 = ${x} is greater`);
        } else {
            res.send(`num3 = ${z} is greater`);
        }
        }else{
            if (y > z) {
                res.send(`num2 = ${y} is greater`);
            } else {
                res.send(`num3 = ${z} is greater`);
            }   
        } 
}

module.exports.raw_data = (req,res) => {
    let strng = req.body;       //take string input
    let arr = Array.from(strng);    //convert string to array
    let sum = (arr1) => {
        var result = 0;
        for (let i in arr1){
            let x = parseInt(arr1[i]);
            result = result + x;
            
        }
        return result;
    }
    
    res.send(`Sum of array elements is ${sum(arr)} `);
}
