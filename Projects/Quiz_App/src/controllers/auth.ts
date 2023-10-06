import mongoose from "mongoose";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";

interface ReturnResponse {
    status: "success" | "error",
    message: String,
    data: {}
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
        } else {
            resp = { status: "error", message: "Inavild input", data: {} };
            res.send(resp);
        }

    } catch (error) {
        console.log(error);
        res.status(400).send("Invalid inputs");
    }

};


export { getUser, updateUser };