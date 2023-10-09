import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import ProjectError from './helper/error';


import userRoute from "./routes/user";
import authRoute from "./routes/auth";
import { stat } from 'fs';



// Replace the uri string with your connection string.

const uri = process.env.CONNECTION_STRING || "";

const app = express();

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {} | []
}

app.use(express.json());

app.use('/user', userRoute);

app.use('/auth', authRoute);

app.use((err: ProjectError, req: Request, res: Response, next: NextFunction) => {
    let message: String;
    let statusCode: number;

    if (!!err.statusCode && err.statusCode < 500) {
        message = err.message;
        statusCode = err.statusCode;
    } else {
        message = "Something went wrong try after some time!";
        statusCode = 500;
    }

    let resp: ReturnResponse = { status: "error", message, data: {} };
    if (!!err.data) {
        resp.data = err.data;
    }

    console.log(err.statusCode, err.message);
    res.status(statusCode).send(resp);
});

mongoose.connect(uri)
    .then(() => {
        console.log('connected to DB!');
        app.listen(process.env.PORT, () =>
            console.log("Server is running"));
    })
    .catch(error => console.log(error))

declare global {
    namespace Express {
        interface Request {
            userId: String;
        }
    }
}


