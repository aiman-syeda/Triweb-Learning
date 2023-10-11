
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import ProjectError from "../helper/error";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import { ReturnResponse } from "../utils/interfaces";
import sendEmail from "../utils/email";

const secretKey = process.env.SECRET_KEY || "";

const userRegisteration = async (req: Request, res: Response, next: NextFunction) => {

    let resp: ReturnResponse;

    const name = req.body.name;
    const email = req.body.email;
    let password = await bcrypt.hash(req.body.password, 12);

    try {
        const validateError = validationResult(req);
        if (!validateError.isEmpty()) {
            const err = new ProjectError("Validation failed!");
            err.statusCode = 422; //for invalid fields
            err.data = validateError.array();
            throw err;

        }

        const user = new User({ name, email, password });
        const result = await user.save();
        if (!result) {
            resp = { status: "error", message: "No result found", data: {} };
            res.send(resp);
        } else {
            resp = { status: "success", message: "Registration done", data: { userId: result._id } };
            res.send(resp);
        }
    } catch (error) {
        next(error);
    }
};

const userLogin = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;

    try {
        const email = req.body.email;
        const password = req.body.password;
        //find user by it's email
        const user = await User.findOne({ email });

        if (!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 401;
            throw err;
        }
        //verify if user is deactivated ot not

        if (user.isDeactivated) {
            const err = new ProjectError("Account is deactivated!");
            err.statusCode = 401;
            throw err;
        }
        //verify password
        const status = bcrypt.compareSync(password, user.password);
        if (status) {
            const token = jwt.sign({ userId: user._id }, "Itisreallyconfidential", { expiresIn: "2h" });
            resp = { status: "success", message: "Logged in", data: { token } };
            res.status(200).send(resp);
        } else {
            const err = new ProjectError("Invalid input");
            err.statusCode = 401;
            throw err;
        }
    } catch (error) {
        next(error);
    }

};

//re-activate user
const activateUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        const email = req.body.email;

        //find user with email
        const user = await User.findOne({ email });

        if (!user) {
            const err = new ProjectError("No user exist");
            err.statusCode = 401;
            throw err;
        }

        //verify if user is deactivated or not
        if (!user.isDeactivated) {
            const err = new ProjectError("User is already activated!");
            err.statusCode = 422;
            throw err;
        }

        const emailToken = jwt.sign({ userId: user._id }, secretKey,
            { expiresIn: "5m" });

        const message = `
      Click on the below link to activate your account:
      http://${process.env.BASE_URL}/auth/activate/${emailToken}
      
      (Note: If the link is not clickable kindly copy the link and paste it in the browser.)`;
        sendEmail(user.email, "Verify Email", message);
        resp = {
            status: "success",
            message: "An Email has been sent to your account please verify!",
            data: {},
        };

        res.status(200).send(resp);
    } catch (error) {
        next(error);
    }
};


const activateUserCallback = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        //verify token sent
        const secretKey = process.env.SECRET_KEY || "";
        let decodedToken;
        const token = req.params.token;
        decodedToken = <any>jwt.verify(token, secretKey);

        if (!decodedToken) {
            const err = new ProjectError("Invalid link!");
            err.statusCode = 401;
            throw err;
        }

        const userId = decodedToken.userId;

        const user = await User.findOne({ _id: userId });

        if (!user) {
            const err = new ProjectError("User not found!");
            err.statusCode = 404;
            throw err;
        }

        user.isDeactivated = false;
        await user.save();

        resp = { status: "success", message: "Account activated!", data: {} };
        res.status(200).send(resp);
    } catch (error) {
        next(error);
    }
};

const ifUserexists = async (email: String) => {
    const user = await User.findOne({ email });
    if (!user) {
        return false;

    } else {
        return true;
    }
};



export {
    userRegisteration, userLogin,
    ifUserexists, activateUser, activateUserCallback
};
