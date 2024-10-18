import express from 'express'

const router = express.Router();

import {
    getAllUsers,
    deleteUser,
    updateUserRole,
  } from '../controllers/adminController.js';

  import { protect,Instructor,Administrator } from '../middlewares/authMiddleware.js';

  router.get('/users', protect,Administrator,getAllUsers);
  router.delete('/users/:id', protect, Administrator, deleteUser);
  router.put('/users/:id/role', protect, Administrator, updateUserRole);



export default router;