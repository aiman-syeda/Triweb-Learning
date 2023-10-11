
import { NextFunction, Request,Response } from "express";
import Quiz from "../models/quiz";
import ProjectError from "../helper/error";
import Result from "../models/result";

const startExam = async (req:Request,res:Response,next:NextFunction) => {
   try {
      const quizId = req.params.quizid;
      const quiz = await Quiz.findById(quizId,{name:1,questions_list:1,is_published:1});
      if(!quiz){
         const err = new ProjectError("Quiz not found!");
         err.statusCode = 405;
         throw err;
      }
      if(!quiz.is_published){
         const err = new ProjectError("Quiz not published!");
         err.statusCode = 405;
         throw err;
      }
      res.send(quiz);
   } catch (error) {
      next(error);
   }
   
   res.send(req.params.quizid);
};

const submitExam =async  (req:Request,res:Response,next:NextFunction) => {
   try {
      const attempted_questions = req.body.attempted_questions;
      const quizId = req.body.quizId;
      const quiz = await Quiz.findById(quizId,{answers:1});
      if(!quiz){
         const err = new ProjectError("Quiz not found!");
         err.statusCode = 405;
         throw err;
      }
      const answers = quiz.answers;
      const userId = req.userId;
      const allquestions = Object.keys(answers);
      const total = allquestions.length;
      let score = 0;
      for(let i = 0; i <= total; i++){
         let question_number = allquestions[i];

         if(!!attempted_questions[question_number] && attempted_questions[question_number] == answers[question_number]){
            score += 1;
         }
      }
      const result = new Result({userId,quizId,total,score});
      const data = await result.save();
      res.send({total,score,resultId:data._id});
   } catch (error) {
      next(error);
   }
   
};


export {startExam,submitExam};