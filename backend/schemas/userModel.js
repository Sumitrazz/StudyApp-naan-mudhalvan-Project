import mongoose from "mongoose"
import bcrypt from "bcrypt"

//User Schema
const { Schema } = mongoose;

const userSchema = new Schema({
 
name: {
    type: String,
    required: true,
    trim: true,
},
email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
},
password: {
    type:String,
    required: true,
},
type: {
    type: String,
    enum:['Student', 'Instructor', 'Administrator'],
    default: 'Student'
},
    
},{timestamps:true}
);

userSchema.pre('save', async function(next){

    try{
        if(!this.isModified('password')) return next();
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        next(err);
    }
});

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);

