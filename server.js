import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import { } from './DB/firebase.js';
import authRoutes from './routes/authRoute.js';
import adminRoutes from './routes/adminRoute.js';
import teacherRoutes from './routes/teacherRoute.js';

// configure env
dotenv.config();

// create an instance of express
const app = express();

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/teacher', teacherRoutes);

// rest api
app.get('/', (req, res) => {
  try {
    res.send('<h1>Welcome to School Website</h1>');
  } catch (error) {
    console.log(error);
  }
});

// PORT
const PORT = process.env.PORT || 8080;

// Listens
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.cyan);
});
