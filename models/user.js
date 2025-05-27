import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName : {
        type : String,
        required : true,
    },
    lastName : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    img : {
        type : String,
        required : false,
        default : "http://avatar.iran.liara.run/public/boy?username=Ash"
    },
    password : {
        type : String,
        required : true,
    },
    role : {
        type : String,
        required : true,
        default : "customer"
    },
    isBlocked : {
        type : Boolean,
        required : true,
        default : false
    }
});

const User = mongoose.model("usrs", userSchema)

export default User;