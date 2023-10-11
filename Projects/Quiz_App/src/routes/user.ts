
import express from "express";
import { body } from "express-validator";


import { userRegisteration, userLogin, ifUserexists,activateUser,activateUserCallback } from "../controllers/user";

const router = express.Router();

//post method for user Registration
router.post('/', [body("name")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 5 })
    .withMessage("Please enter a valid name, minimum of 5 characters"),
body("email")
    .trim()
    .isEmail()
    .custom((emailId:String) => {
        return ifUserexists(emailId)
            .then((status) => {
                if(status){
                return Promise.reject("User already exists");
                }
            })
            .catch((err) => {
                return Promise.reject(err);
            })
    })
    .normalizeEmail(),
    body("password")
    .trim()
    .isLength({min:6})
    .withMessage("Enter password,Your password must have atleast 6 characters"),
    body("confirm_password")
    .trim()
    .custom((value:String, {req}) => {
        if(value != req.body.password) {
            return Promise.reject("Password does not match!");
        }
        return true
    } )
], userRegisteration);

//post method for login
router.post('/login', userLogin);

//POST /auth/activate account
router.post(
    "/activate",
    [body("email").trim().isEmail().withMessage("Invalid Email!")],
    activateUser
  );

  //re-activate link
// GET /user/activate
router.get("/activate/:token", activateUserCallback);



export default router;