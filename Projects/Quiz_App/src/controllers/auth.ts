
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import ProjectError from "../helper/error";
import { ReturnResponse } from "../utils/interfaces";



const getUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        if (req.userId != req.params.userId) {
            const err = new ProjectError('You are not authorized');
            err.statusCode = 401;
            throw err;
        }
        const userId = req.params.userId;
        const user = await User.findById(userId, { name: 1, email: 1 });
        if (!user) {
            const err = new ProjectError("User doesn't exists");
            err.statusCode = 401;
            throw err;
        } else {
            resp = { status: "success", message: "User Data", data: { user: user } };
            res.status(200).send(resp);
        }
    } catch (error) {
        next(error);
    }

};

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
    let resp: ReturnResponse;
    try {
        if (req.userId != req.body._id) {
            const err = new ProjectError('You are not authorized');
            err.statusCode = 401;
            throw err;
        }
        const userId = req.body._id;
        const user = await User.findById(userId, { name: 1 });
        if (user) {
            user.name = req.body.name;
            await user.save();
            resp = { status: "success", message: "User Data", data: { user: user } };
            res.send(resp);
        } else {
            const err = new ProjectError("Invalid Inputs");
            err.statusCode = 401;
            throw err;
        }
    } catch (error) {
        next(error);
    }

};

const deactivateUser = async (req:Request, res:Response, next:NextFunction) => {
    let resp: ReturnResponse;
    const userId = req.userId;
    try {
      if (!userId) {
        const err = new ProjectError("You are not authorized!");
        err.statusCode = 401;
        throw err;
      }
  
      const user = await User.findById(userId);
      if (!user) {
        const err = new ProjectError("No user exist");
        err.statusCode = 401;
        throw err;
      }
  
      user.isDeactivated = true;
      await user.save();
  
      resp = { status: "success", message: "User deactivated!", data: {} };
      res.status(200).send(resp);
    } catch (error) {
      next(error);
    }
  };
  
  const isActiveUser = async (userId: String) => {
    const user = await User.findById(userId);
  
    if (!user) {
      const err = new ProjectError("User not found!");
      err.statusCode = 404;
      throw err;
    }
    return !user.isDeactivated;
  };


export { getUser, updateUser,deactivateUser,isActiveUser };