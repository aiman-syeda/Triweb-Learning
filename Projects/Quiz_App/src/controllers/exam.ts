
import { Request,Response } from "express";

const startExam = (req:Request,res:Response) => {
   res.send(req.params.quizid);
};

const submitExam = (req:Request,res:Response) => {
   res.send(req.body);
   
};


export {startExam,submitExam};