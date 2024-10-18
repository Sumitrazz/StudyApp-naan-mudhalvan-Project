// routers/courseRoutes.js

import express from 'express';
const router = express.Router();

// Import controller functions
import {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} from '../controllers/courseController.js'
//'../controllers/courseController.js';

// Import authentication middleware
import { protect, Instructor } from '../middlewares/authMiddleware.js';

// Course management routes
router.get('/courses', protect, Instructor, getAllCourses);
router.post('/courses', protect, Instructor, createCourse);
router.put('/courses/:id', protect, Instructor, updateCourse);
router.delete('/courses/:id', protect, Instructor, deleteCourse);
router.get('/course/:id', protect, Instructor, getCourseById);

export default router;
