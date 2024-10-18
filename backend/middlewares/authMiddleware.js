// Import necessary modules
import jwt from 'jsonwebtoken';
import User from '../schemas/userModel.js';

// Middleware to protect routes and authenticate users
export const protect = async (req, res, next) => {
  let token;

  // Check for token in Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extract token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token using JWT_SECRET
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Find the user associated with the token
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        return res.status(401).json({ message: 'User not found' });
      }

      // Proceed to the next middleware or route handler
      next();
    } catch (error) {
      console.error('Token verification failed:', error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  } else {
    // No token provided
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

// Middleware to authorize Admin users
export const Administrator = (req, res, next) => {
  if (req.user && req.user.type === 'Administrator') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, admin only' });
  }
};

// Middleware to authorize Instructor users
export const Instructor = (req, res, next) => {
  if (req.user && req.user.type === 'Instructor') {
    next();
  } else {
    res.status(403).json({ message: 'Access denied, instructors only' });
  }
};
