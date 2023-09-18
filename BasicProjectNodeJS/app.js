const express = require('express');
const userRoute = require('/Users/syeda/Documents/Aiman Syeda/Node JS app_2/routers/user.js')
const app = express();


app.use(express.json());
app.use('/user',userRoute);
app.listen(3000);