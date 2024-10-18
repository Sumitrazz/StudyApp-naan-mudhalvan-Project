// Import the jsonwebtoken library
import jwt from 'jsonwebtoken';

// Function to generate a JWT token
const generateToken = (id) => {
  // Sign the token with the user's ID and the secret key
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Token will expire in 30 days
  });
};

// Export the generateToken function
export default generateToken;
