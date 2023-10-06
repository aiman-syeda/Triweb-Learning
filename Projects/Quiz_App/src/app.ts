import express from 'express';
import mongoose from 'mongoose';


import userRoute from "./routes/user";
import authRoute from "./routes/auth";


// Replace the uri string with your connection string.

const uri = process.env.CONNECTION_STRING || "" ;

const app = express();

mongoose.connect(uri)
    .then(() => {
    console.log('connected to DB!');
    app.listen(process.env.PORT,()=>
    console.log("Server is running"));
    })
    .catch(error => console.log(error))
    

app.use(express.json());

app.use('/user',userRoute);

app.use('/auth',authRoute);

