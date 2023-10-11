
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

import ProjectError from "../helper/error";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import { ReturnResponse } from "../utils/interfaces";


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

        //verify password
        if (user) {
            const status = bcrypt.compareSync(password, user.password ?? "");
            if (status) {
                const token = jwt.sign({ userId: user._id }, "Itisreallyconfidential", { expiresIn: "1h" });
                resp = { status: "success", message: "Logged in", data: { token } };
                res.status(200).send(resp);
            } else {
                const err = new ProjectError("Invalid input");
                err.statusCode = 401;
                throw err;
            }
        } else {
            const err = new ProjectError("User doesn't exists");
            err.statusCode = 401;
            throw err;
        }
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
}

export { userRegisteration, userLogin, ifUserexists };
