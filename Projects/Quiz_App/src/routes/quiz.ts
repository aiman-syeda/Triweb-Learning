import express from "express";
import { body } from "express-validator";


import { createQuiz, getQuiz, updateQuiz, deleteQuiz, publishQuiz } from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";


const router = express.Router();

router.post('/', isAuthenticated, [body("name")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Please enter a valid name, minimum of 10 characters"),
body("questions_list")
    .custom(questions_list => {
        if (questions_list == 0) {
            return Promise.reject("Question list can not be empty!");
        }
        return true;
    }),
body("answers")
    .custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Please enter answers for all the questions!");
        }
        return true;
    })], createQuiz);


router.get('/:quizid', isAuthenticated, getQuiz);

router.put('/', isAuthenticated, [body("name")
    .trim()
    .not()
    .isEmpty()
    .isLength({ min: 10 })
    .withMessage("Please enter a valid name, minimum of 10 characters"),
body("questions_list")
    .custom(questions_list => {
        if (questions_list == 0) {
            return Promise.reject("Question list can not be empty!");
        }
        return true;
    }),
body("answers")
    .custom(answers => {
        if (Object.keys(answers).length == 0) {
            return Promise.reject("Please enter answers for all the questions!");
        }
        return true;
    })], updateQuiz);

router.delete('/:quizid', isAuthenticated, deleteQuiz);

router.patch('/publish', isAuthenticated, publishQuiz);






export default router;