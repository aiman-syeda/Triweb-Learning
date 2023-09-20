/* Rest Api architecture
.node is responsible to run the server and gives "response" accordingly
.Anything that comes from the client is called request 
.Use express to create Rest api structure in node
.Express is a package*/

const express = require('express');  //import express
const calculatorRouter = require("/Users/syeda/Documents/projects/Triweb-Learning/Node JS/routers/r_calculator");
const mathematicRouter = require("//Users/syeda/Documents/projects/Triweb-Learning/Node JS/routers/r_more_maths.js")
const app = express();  //initialization

app.use(express.json());  //parsing data

app.use(express.text());  //parsing data

app.use('/calculator',calculatorRouter);  //Use router files
app.use('/more-maths',mathematicRouter);

app.listen(3000);  //declare port on which u want to run the code