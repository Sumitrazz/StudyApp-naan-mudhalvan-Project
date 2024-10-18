// controllers/courseController.js

// Import necessary modules and models
import Course from '../schemas/courseModel.js'; 
// @desc    Get all courses
// @route   GET /api/courses
// @access  Private/Admin
export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({});

    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Create a new course
// @route   POST /api/courses
// @access  Private/Admin

export const createCourse = async (req, res) => {
  try {
    const {
      C_educator,
      C_categories,
      C_title,
      C_description,
      sections,
      C_price,
    } = req.body;

    // Validate required fields
    if (!C_educator || !C_categories || !C_title || !C_description || !C_price) {
      return res.status(400).json({ message: 'All required fields must be provided' });
    }

    // Ensure sections is an array
    if (!Array.isArray(sections) || sections.length === 0) {
      return res.status(400).json({ message: 'Course sections must be provided' });
    }

    // Create the new course object
    const course = new Course({
      userID: req.user._id, // The Instructor's user ID
      C_educator,
      C_categories,
      C_title,
      C_description,
      sections,
      C_price,
    });

    // Save the course to the database
    const createdCourse = await course.save();

    res.status(201).json(createdCourse); // Respond with the created course object
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// @desc    Update a course
// @route   PUT /api/Instructor/courses/:id
// @access  Private/Admin
export const updateCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId);

    if (course) {
      const {
        C_educator,
        C_categories,
        C_title,
        C_description,
        sections,
        C_price,
      } = req.body;

      // Update course fields
      course.C_educator = C_educator || course.C_educator;
      course.C_categories = C_categories || course.C_categories;
      course.C_title = C_title || course.C_title;
      course.C_description = C_description || course.C_description;
      course.sections = sections || course.sections;
      course.C_price = C_price || course.C_price;

      const updatedCourse = await course.save();

      res.json(updatedCourse);
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a course
// @route   DELETE /api/Instructor/courses/:id
// @access  Private/Admin

export const deleteCourse = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findByIdAndDelete(courseId); // Use findByIdAndDelete

    if (course) {
      res.json({ message: 'Course removed' });
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    console.error("Error deleting course:", error); // Log the error for debugging
    res.status(500).json({ message: 'Server error', error: error.message }); // Provide more details about the error
  }
};
// @desc    Get a single course by ID
// @route   GET /api/courses/:id
// @access  Instructor/Admin
export const getCourseById = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId);

    if (course) {
      res.json(course); // Send the course details as the response
    } else {
      res.status(404).json({ message: 'Course not found' });
    }
  } catch (error) {
    console.error("Error fetching course by ID:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};