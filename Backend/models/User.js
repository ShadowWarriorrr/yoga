import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: String,
    
    },
    age: {
        type: String,
    },
    des: {
        type: String,
        
    }
});

export default mongoose.model("User", UserSchema);