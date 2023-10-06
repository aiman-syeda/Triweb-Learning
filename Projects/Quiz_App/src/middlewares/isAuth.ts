import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";


const isAuthenticated = (req: Request, res: Response, next: NextFunction) => {

    //get header from token 
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        const err = new Error('User not authenticated');
        //err.statusCode = 401;
        throw err;
        //res.status(401).send('User not authenticated');
    }
    const token = authHeader.split(' ')[1];
    //decoding token usind sign 
    let decodedToken:{userId:String, iat:Number,exp:Number};
    try {
        decodedToken = <any>jwt.verify(token, "Itisreallyconfidential");
    } catch (error) {
        const err = new Error('User not authenticated');
        //err.statusCode = 401;
        throw err;
        //res.status(401).send('User not authenticated');
    }


    //get userId from decoded token
    if (!decodedToken) {
        const err = new Error('User not authenticated');
        //err.statusCode = 401;
        throw err;
        //res.status(401).send('User not authenticated');
    } else {
        const userid = decodedToken;
    }

    
    req.userId = decodedToken.userId;
    next();


};

export { isAuthenticated };