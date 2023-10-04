import mongoose from "mongoose";
const schema = mongoose.Schema;

const userschema = new schema(
    {
        name:{
            type:String,
            reuired:true
        },
        email:{
            type:String,
            reuired:true,
            unique:true,
            index:true
        },
        password:{
            type:String,
            reuired:true
        }
    },
    {timestamps:true}
);


const User = mongoose.model("User",userschema);

export default User;