const express = require('express');
//const userController = require('../controller/user');
import {registerUser} from '../controller/user' ;
const router = express.Router();

router.use('/register', registerUser);

export default router;