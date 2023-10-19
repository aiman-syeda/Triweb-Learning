const express =  require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Running");
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    res.send({});

})

app.listen(3002);