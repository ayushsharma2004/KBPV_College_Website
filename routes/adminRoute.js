import express from 'express';
import { isAdmin } from '../middleware/authMiddleware.js';
import { standardsRegisterController, studentRegisterController, teachersRegisterController, viewStudentController, viewTeacherController } from '../controller/adminController.js';


// import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';



//route object
const router = express.Router();

//routing
//Register || POST
router.post('/register/student', studentRegisterController);
router.post('/view/student', viewStudentController);
router.post('/register/teacher', teachersRegisterController);
router.get('/view/teacher', viewTeacherController);
router.post('/register/standard', standardsRegisterController);

export default router;