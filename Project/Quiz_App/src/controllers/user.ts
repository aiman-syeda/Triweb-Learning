import mongoose from "mongoose";
import { Request, Response } from "express";
import User from "../models/user";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
}

const userRegisteration = async (req: Request, res: Response) => {

    let resp: ReturnResponse;
    try {
        const user = new User(req.body);
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
}

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
        }
        
    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid inputs");
    }

};


export { userRegisteration, getUser, updateUser };