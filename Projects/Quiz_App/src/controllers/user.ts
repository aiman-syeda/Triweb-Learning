import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import { Request, Response } from "express";
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
        //console.log(error);
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
                resp = { status: "success", message: "Logged in", data: { } };
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


const getUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId, { name: 1, email: 1 });
        if (!user) {
            resp = { status: "error", message: "No user found", data: {} };
            res.send(resp);
        } else {
            resp = { status: "success", message: "User Data", data: { user: user } };
            res.send(resp);
        }
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid inputs");
    }

};

const updateUser = async (req: Request, res: Response) => {
    let resp: ReturnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId, { name: 1 });
        if (user) {
            user.name = req.body.name;
            await user.save();
            resp = { status: "success", message: "User Data", data: { user: user } };
            res.send(resp);
        } else {
            resp = { status: "error", message: "Inavild input", data: {} };
            res.send(resp);
        }

    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid inputs");
    }

};


export { userRegisteration, userLogin, getUser, updateUser };