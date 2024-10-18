import express from 'express'
import mongoose, { connect } from 'mongoose'
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routers/userRoutes.js';
import adminRoutes from './routers/adminRoutes.js';
import courseRoutes from './routers/courseRoutes.js'

import { notFound, errorHandler } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }


const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI );
      console.log('MongoDB connected successfully.');
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);
      process.exit(1); 
    }
  };
  
  connectDB();

  app.use('/api/users', userRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api', courseRoutes);

  //endpoint

  app.get('/', (req,res)=> {
    res.send("Api is running....");
  });

  app.use(notFound);
  app.use(errorHandler);

  const PORT = 1111;

  app.listen(PORT,()=> {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);  })