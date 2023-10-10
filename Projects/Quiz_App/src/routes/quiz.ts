import  express  from "express";
import {createQuiz,getQuiz,updateQuiz,deleteQuiz,publishQuiz} from "../controllers/quiz";
import { isAuthenticated } from "../middlewares/isAuth";


const router = express.Router();

router.post('/',isAuthenticated,createQuiz);

router.get('/:quizid',isAuthenticated,getQuiz);

router.put('/',isAuthenticated,updateQuiz);

router.delete('/:quizid',isAuthenticated,deleteQuiz);

router.patch('/publish',isAuthenticated,publishQuiz);






export default router;