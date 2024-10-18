// Import Mongoose
import mongoose from 'mongoose';

// Define the Enrolled Course Schema
const enrolledCourseSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    courseID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
    enrollmentDate: {
      type: Date,
      default: Date.now,
    },
    progress: {
      type: Number,
      default: 0, // Represents percentage completion
    },
    completionStatus: {
      type: String,
      enum: ['Not Started', 'In Progress', 'Completed'],
      default: 'Not Started',
    },
    lastAccessed: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

// Create a compound index to ensure a user cannot enroll in the same course multiple times
enrolledCourseSchema.index({ userID: 1, courseID: 1 }, { unique: true });

// Export the EnrolledCourse model
export default mongoose.model('EnrolledCourse', enrolledCourseSchema);
