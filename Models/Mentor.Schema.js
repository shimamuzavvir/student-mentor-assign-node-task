import mongoose from "mongoose";


const mentorSchema = mongoose.Schema({
    name:String,
    email:String,/*have some email validator instead of common String type and use sanitation */,
    students:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'

    }]
},{versionKey:false})

const Mentor = mongoose.model('Mentor', mentorSchema)
export default Mentor