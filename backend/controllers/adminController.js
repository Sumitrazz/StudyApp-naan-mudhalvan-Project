
import User from '../schemas/userModel.js';
import Course from '../schemas/courseModel.js';

// @desc    Get all users
// @route   GET /api/admin/users
// @access  Private/Admin
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select('-password');

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Delete a user
// @route   DELETE /api/admin/users/:id
// @access  Private/Admin
export const deleteUser = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findByIdAndDelete(userId); // Delete user directly

    if (user) {
      res.json({ message: 'User removed' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


// @desc    Update user role
// @route   PUT /api/admin/users/:id/role
// @access  Private/Admin
export const updateUserRole = async (req, res) => {
  const userId = req.params.id;
  const { type } = req.body;

  try {
    const user = await User.findById(userId);

    if (user) {
      if (['Student', 'Instructor', 'Administrator'].includes(type)) {
        user.type = type;
        const updatedUser = await user.save();

        res.json({
          _id: updatedUser._id,
          name: updatedUser.name,
          email: updatedUser.email,
          type: updatedUser.type,
        });
      } else {
        res.status(400).json({ message: 'Invalid user type' });
      }
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};


