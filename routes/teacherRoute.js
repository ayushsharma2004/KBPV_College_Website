import express from 'express';
import { isAdmin } from '../middleware/authMiddleware.js';
import { readChapterController, readSubjectController, readSyllabusController, readTimetableController, studentAttendanceController, uploadNotesController, uploadSyllabusController, uploadTimetableController, viewAttendanceController } from '../controller/teacherController.js';
import { chapterFirebaseStorage, syllabusFirebaseStorage, timetableFirebaseStorage } from '../middleware/firebaseStorage.js';
import { updateChapterUrl } from '../helper/crumd.js';


// import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';



//route object
const router = express.Router();

//routing
//Register || POST
// router.post('/register/student', studentRegisterController);
// router.post('/register/teacher', teachersRegisterController);
router.post('/add-attendance/student', studentAttendanceController);
router.post('/view-attendance/student', viewAttendanceController);
router.post('/upload-syllabus', syllabusFirebaseStorage, uploadSyllabusController);
router.get('/read-syllabus', readSyllabusController);
router.post('/read-subjects', readSubjectController);
router.post('/read-chapters', readChapterController);
router.post('/upload-notes', chapterFirebaseStorage, uploadNotesController);
router.post('/upload-timetable', timetableFirebaseStorage, uploadTimetableController);
router.get('/read-timetable', readTimetableController);
// router.post('/login/admin', isAdmin, adminLoginController);


export default router;