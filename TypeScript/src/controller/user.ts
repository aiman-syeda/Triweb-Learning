
import { Request, Response } from 'express';

import {addUserToDB} from '../models/user';

const registerUser = (req:Request,res:Response) => {

    const userName = "Ajay";
    const password = "1123";
    
    const result = addUserToDB(userName,password);
    res.send(result);
} ;

export {registerUser};