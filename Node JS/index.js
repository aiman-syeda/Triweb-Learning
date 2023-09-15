/* Rest Api architecture
.node is responsible to run the server and gives "response" accordingly
.Anything that comes from the client is called request 
.Use express to create Rest api structure in node
.Express is a package*/

const express = require('express');  //import express

const app = express();  //initialization

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/add',(req,res)=>{
    let sum;
    let n1 = 23;
    let n2 = 7;
    sum = n1 + n2;
    res.send(`Sum = ${sum}`);
});

app.listen(3000);  //declare port on which u want to run the code