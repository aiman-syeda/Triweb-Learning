import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import ProjectError from "../helper/error";
import { isActiveUser } from "../controllers/auth";

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {

    try {
        //get header from token 
        const authHeader = req.get('Authorization');
        if (!authHeader) {
            const err = new ProjectError('User not authenticated');
            err.statusCode = 401;
            throw err;
            //res.status(401).send('User not authenticated');
        }
        const token = authHeader.split(' ')[1];
        //decoding token usind sign 
        let decodedToken: { userId: String, iat: Number, exp: Number };
        try {
            decodedToken = <any>jwt.verify(token, "Itisreallyconfidential");
        } catch (error) {
            const err = new ProjectError('User not authenticated');
            err.statusCode = 401;
            throw err;

        }


        //get userId from decoded token
        if (!decodedToken) {
            const err = new ProjectError('User not authenticated');
            err.statusCode = 401;
            throw err;
        }
        //isActiveUser in user controller else inactive user
        if (!(await isActiveUser(decodedToken.userId))) {
            const err = new ProjectError("User is deactivated!");
            err.statusCode = 422;
            throw err;
        }

        req.userId = decodedToken.userId;
        next();


    } catch (error) {
        next(error);
    }
}

export { isAuthenticated };