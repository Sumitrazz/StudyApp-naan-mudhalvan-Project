import User from '../schemas/userModel.js';
import Course from '../schemas/courseModel.js';
import EnrolledCourse from '../schemas/enrolledCourseModel.js';
import generateToken from '../utils/generateToken.js';

export const registerUser = async (req, res)=> {
    const {name , email, password,type} = req.body;

    try {
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: 'User already exists'});
        }
        const user = await User.create({
            name,
            email,
            password,
            type:type || 'Student',

        });
        const token = generateToken(user._id);
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            type: user.type,
            token,
        });
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};

export const loginUser = async (req, res)=> {
    const {email, password}= req.body;

    try {
        const user =await User.findOne({email});
        if(user && (await user.comparePassword(password))){
        const token = generateToken(user._id);

        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            type: user.type,
            token,
        });
        }else{
            res.status(401).json({message: "Invaild email or password"});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
        
    }
};

export const getUserProfile = async (req, res)=> {
    try {
        const user =await User.findById(req.user._id).select('-password');

        if(user){
            res.json(user);
        }else{
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
};


export const updateUserProfile = async (req,res)=> {
    try {
        const user = await User.findById(req.user._id);

        if(user){
            user.name = req.body.name || user.name;
            user.email = req.body.email || user.email;

            if(req.body.password){
                user.password = req.body.password;
            }
            const updatedUser = await user.save();

            const token = generateToken(updatedUser._id);

            res.json({
                _id: updatedUser._id,
                name: updatedUser.name,
                email: updatedUser.email,
                type: updatedUser.type,
                token,
            });
        }else{
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({messgae: 'Server error'});
    }
};

// @desc    Enroll user in a course
// @route   POST /api/users/enroll/:courseId
// @access  Private


export const enrollInCourse = async (req, res) => {
    const userId = req.user._id;
    const courseId = req.params.courseId;

    try {
        // Check if the course exists
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        // Check if the user is already enrolled in the course
        const alreadyEnrolled = await EnrolledCourse.findOne({ userID: userId, courseID: courseId });
        if (alreadyEnrolled) {
            return res.status(409).json({ message: 'User already enrolled in this course' });
        }

        // Enroll the user in the course
        const enrollment = new EnrolledCourse({
            userID: userId,
            courseID: courseId,
        });
        await enrollment.save();

        res.status(201).json({ message: 'Enrollment successful' });
    } catch (error) {
        console.error('Enrollment error:', error); // Log the error for debugging
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// @desc    Get courses the user is enrolled in
// @route   GET /api/users/my-courses
// @access  Private

export const getEnrolledCourses = async (req, res)=> {
    const userId = req.user._id;

    try{
        const enrollments = await EnrolledCourse.find({userID:userId}).populate('courseID');
        const courses= enrollments.map((enrollment)=> enrollment.courseID);
        res.json(courses);
    }catch(error){
        res.status(500).json({message: 'Server error'});
    }
};