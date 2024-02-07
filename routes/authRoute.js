import express from 'express';
import { adminLoginController, studentsLoginController, teachersLoginController } from '../controller/authController.js';
import { isAdmin, isTeacher } from '../middleware/authMiddleware.js';
import { sendOTP } from '../middleware/sendOTP.js';
import { verifyOTP } from '../middleware/verifyOTP.js';


// import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';



//route object
const router = express.Router();

//routing
//Register || POST
// router.post('/register/student', studentRegisterController);
// router.post('/register/teacher', teachersRegisterController);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP);
router.post('/login/student', verifyOTP, studentsLoginController);
router.post('/login/teacher', verifyOTP, isTeacher, teachersLoginController);
router.post('/login/admin', isAdmin, adminLoginController);


export default router;