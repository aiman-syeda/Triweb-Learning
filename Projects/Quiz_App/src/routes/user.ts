import  express from "express";

import { userRegisteration,userLogin, getUser, updateUser } from "../controllers/user";

const router = express.Router();

//post method for user Registration
router.post('/', userRegisteration);

//post method for login
router.post('/login',userLogin);

//get method to get user
router.get('/:userId', getUser);

//put method to update user data
router.put('/',updateUser);



export default router;