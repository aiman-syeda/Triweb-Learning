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

app.listen(3000);  //declare port on which u want to run the code