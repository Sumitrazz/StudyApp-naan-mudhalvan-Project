import express from 'express';
const router = express.Router();

import {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    enrollInCourse,
    getEnrolledCourses,
} from '../controllers/userControllers.js';
import { protect } from '../middlewares/authMiddleware.js';

router.post('/register',registerUser);
router.post('/login', loginUser);

router.get('/profile',protect,getUserProfile);
router.put('/profile', protect, updateUserProfile);

router.post('/enroll/:courseId', protect , enrollInCourse);
router.get('/my-courses', protect , getEnrolledCourses);

export default router;