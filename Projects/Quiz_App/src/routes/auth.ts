import  express from "express";

import {getUser, updateUser,deactivateUser } from "../controllers/auth";
import { isAuthenticated } from "../middlewares/isAuth";

const router = express.Router();


//get method to get user
router.get('/:userId',isAuthenticated, getUser);

//put method to update user data
router.put('/',isAuthenticated, updateUser);

//patch to deactivate user
router.patch("/deactivate", isAuthenticated, deactivateUser);



export default router;