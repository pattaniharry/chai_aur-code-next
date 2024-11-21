import { Verify } from "crypto";
import mongoose, { mongo, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const userSchema = new mongoose.Schema({
username:{
    type:String,
    required:[true,"Please provide a username"],
    unique: true
},
email:{
    type:String,
    required:[true, "Please provide an email"],
    unique:true
},
password:{
    type:String,
    required:[true,"please provide a passowrd"]
},

isVerified:{
    type:Boolean,
    default:false
},
isAdmin:{
    type:Boolean,
    default:false
},
ForgotPasswordToken:String,
ForgotPasswordTokenExpiry: Date,
VerifyToken:String,
VerifyTOkenExpiry:Date,

});

const User  = mongoose.models.users || mongoose.model("users",userSchema);

export default User;