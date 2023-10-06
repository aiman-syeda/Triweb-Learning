import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";


interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
}



const userRegisteration = async (req: Request, res: Response) => {

    let resp: ReturnResponse;

    const name = req.body.name;
    const email = req.body.email;
    let password = await bcrypt.hash(req.body.password, 12);

    try {
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
        
        res.status(400).send("Invalid inputs");
    }
};

const userLogin = async (req: Request, res: Response) => {
    let resp: ReturnResponse;

    try {
        const email = req.body.email;
        const password = req.body.password;
        //find user by it's email
        const user = await User.findOne({ email });

        //verify password
        if(user){
            const status = bcrypt.compareSync(password, user.password ?? "");
            if (status) {
                const token = jwt.sign({userId:user._id},"Itisreallyconfidential",{expiresIn:"1h"});
                resp = { status: "success", message: "Logged in", data: {token} };
                res.status(200).send(resp);
            } else {
                resp = { status: "error", message: "Inavild input", data: {} };
                res.status(401).send(resp);
            }
        }else{
            resp = { status: "error", message: "Inavild input", data: {} };
            res.status(401).send(resp);
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid inputs");
    }

};

export { userRegisteration, userLogin };
