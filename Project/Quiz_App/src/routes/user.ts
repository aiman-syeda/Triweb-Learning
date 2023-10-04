import  express from "express";

import { userRegisteration, getUser, updateUser } from "../controllers/user";

const router = express.Router();

router.post('/', userRegisteration);

router.get('/:userId', getUser);

router.put('/',updateUser);



export default router;