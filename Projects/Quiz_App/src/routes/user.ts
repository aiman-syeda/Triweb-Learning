
import  express from "express";

import { userRegisteration,userLogin} from "../controllers/user";

const router = express.Router();

//post method for user Registration
router.post('/', userRegisteration);

//post method for login
router.post('/login',userLogin);

export default router;