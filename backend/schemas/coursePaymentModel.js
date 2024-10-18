// Import Mongoose
import mongoose from 'mongoose';

// Define the Course Payment Schema
const coursePaymentSchema = new mongoose.Schema(
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
    amount: {
      type: Number,
      required: true,
    },
    paymentDate: {
      type: Date,
      default: Date.now,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
    transactionID: {
      type: String,
      required: true,
      unique: true,
    },
    paymentMethod: {
      type: String,
      enum: ['Stripe', 'PayPal', 'CreditCard', 'DebitCard'],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Export the CoursePayment model
export default mongoose.model('CoursePayment', coursePaymentSchema);
