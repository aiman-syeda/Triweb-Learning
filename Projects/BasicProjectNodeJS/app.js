const express = require('express');  //import express framework
const userRoute = require('/Users/syeda/Documents/Aiman Syeda/BasicProjectNodeJS/routers/user.js')  //add routers path
const app = express();  //Create express app


app.use(express.json());    //parse data
app.use('/user',userRoute);
app.listen(3000);   //declare port 