import mongoose from "mongoose";
const schema = mongoose.Schema;

const quizschema = new schema(
    {
        name:{
            type:String,
            required:true,
            unique:true
        },
        questions_list:[
            {
            question_number:{
                type:Number,
                required:true
            },   
            question:String,
            options:{
            }
        }],
        answers:{
            type:{},
            required:true
        },
        created_by:{
            type:mongoose.Types.ObjectId,
            required:true
        }, 
        is_published:{
            type:Boolean,
            default:false
        }
        
    },
    {timestamps:true}
);


const Quiz = mongoose.model("Quiz",quizschema);

export default Quiz;