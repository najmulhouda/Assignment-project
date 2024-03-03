import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    position:{
        type: String,
        required: true
    },
    number:{
        type: Number,
        required: true
    },

})


export default mongoose.model("User", userSchema);