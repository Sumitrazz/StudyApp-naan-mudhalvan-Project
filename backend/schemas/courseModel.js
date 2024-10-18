// // Import Mongoose
// import mongoose from 'mongoose';

// // Define the Course Schema
// const courseSchema = new mongoose.Schema(
//   {
//     userID: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     C_educator: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     C_categories: {
//       type: [String],
//       required: true,
//     },
//     C_title: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     C_description: {
//       type: String,
//       required: true,
//       trim: true,
//     },
//     sections: [
//       {
//         title: { type: String, required: true },
//         content: { type: String },
//         videoUrl: { type: String },
//         resources: [String],
//       },
//     ],
//     C_price: {
//       type: Number,
//       required: true,
//       default: 0,
//     },
//     enrolled: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User',
//       },
//     ],
//   },
//   {
//     timestamps: true, // Adds createdAt and updatedAt fields
//   }
// );

// // Export the Course model
// export default mongoose.model('Course', courseSchema);

import mongoose from 'mongoose';

// Define the Course Schema
const courseSchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    C_educator: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,  // Minimum length of educator's name
    },
    C_categories: {
      type: [String],
      required: true,
      default: [],  // Default empty array
    },
    C_title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,  // Minimum length for course title
    },
    C_description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,  // Minimum length for course description
    },
    sections: [
      {
        title: { type: String, required: true, minlength: 3 },
        content: { type: String },
        videoUrl: { 
          type: String,
          validate: {
            validator: function(v) {
              return /^(https?:\/\/)?(www\.)?([a-zA-Z0-9_\-]+)\.[a-zA-Z]{2,}([a-zA-Z0-9_\-\/]*)?$/.test(v);
            },
            message: props => `${props.value} is not a valid URL!`
          },
        },
        resources: {
          type: [String],
          default: [], // Default empty array for resources
        },
      },
    ],
    C_price: {
      type: Number,
      required: true,
      default: 0,
      min: 0, // Price cannot be negative
    },
    enrolled: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

// Index C_title for faster search on course title
courseSchema.index({ C_title: 'text' });

// Export the Course model
export default mongoose.model('Course', courseSchema);
