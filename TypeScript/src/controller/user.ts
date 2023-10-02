
import { Request, Response } from 'express';

import {addUserToDB, updateUserData} from '../models/user';

const registerUser = (req:Request,res:Response) => {

    const userName = "Ajay";
    const password = "1123";
    
    const result = addUserToDB(userName,password);
    res.send(result);
} ;

const updateUser = (req:Request,res:Response) => {
    const myuser = {
        id:1,
        user_name:'Aladdin',
        email:'aladdin@gmail.com',
        password:'abcd'
    }
    const result = updateUserData(myuser);
    res.send(result);
}

export {registerUser,updateUser};