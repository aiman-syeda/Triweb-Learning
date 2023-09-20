module.exports.even_odd = (req,res) => {
    if (req.body.number % 2 == 0){
        res.send(`${req.body.number} is an even number`);
    }
    res.send(`${req.body.number} is an odd number`);
}
