import { admin } from "../DB/firestore.js";
const db = admin.firestore();
import { createData, matchData, matchTwoData, readAllData, readChaptersFieldData, readFieldData, updateChapterUrl } from "../helper/crumd.js";

export const studentAttendanceController = async (req, res) => {
    try {
        const { phoneArr, attendanceArr } = req.body;
        //validation
        if (!phoneArr) {
            return res.send({ message: 'Phone array is required' });
        }
        if (!attendanceArr) {
            return res.send({ message: 'Attendance array is required' });
        }
        var len = phoneArr.length;
        for (var i = 0; i < len; i++) {
            var phone = phoneArr[i];
            var currentAttendance = attendanceArr[i];
            var count = 0;
            if (currentAttendance === true) {
                count = 1;
            }
            const student = await db.collection(process.env.studentsCollectionName).doc(phone);
            var attendance = (await student.get()).get('attendance');
            var days = attendance.days + 1;
            var attended = Number(attendance.attended) + count;
            var percentage = (attended / days) * 100;
            var attendanceData = {
                days: days,
                attended: attended,
                percentage: percentage
            }
            console.log(attendance);
            console.log(attendanceData);
            student.update({
                attendance: attendanceData,
            })
        }

        return res.status(201).send({
            success: true,
            message: 'Student registered successfully',
            // user: userJson
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

//view student attendance
export const viewAttendanceController = async (req, res) => {
    try {
        const {
            standard,
            division
        } = req.body;

        if (!standard) {
            return res.send({ message: 'Usernme is not provided' });
        }
        if (!division) {
            return res.send({ message: 'Name is required' });
        }

        const querySnapshot = await matchTwoData(process.env.studentsCollectionName, 'standard', standard, 'division', division);
        const studStandard = querySnapshot.docs.map(doc => ({
            data: doc.data()
        }));
        // const studStandards = studStandard.docs;
        // console.log(studStandards[0]);
        // console.log(studStandard);
        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            studStandard: studStandard,
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

//view student attendance
export const uploadSyllabusController = async (req, res) => {
    try {
        const {
            standard, url
        } = req.body;

        if (!standard) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!url) {
            return res.send({ message: 'Url is not provided' });
        }
        const data = {
            standard: standard,
            url: url
        }
        console.log(url, standard);
        const syllabus = await createData(process.env.syllabusCollectionName, standard, data);
        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            syllabusUrl: url,
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};


//view student attendance
export const readSyllabusController = async (req, res) => {
    try {
        const syllabus = await readAllData(process.env.syllabusCollectionName);
        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            syllabus: syllabus,
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

//view chapter
export const readSubjectController = async (req, res) => {
    try {
        const { standard } = req.body;
        const subjects = await readFieldData(process.env.standardsCollectionName, standard, 'subjects');
        // const studStandards = studStandard.docs;
        // console.log(studStandards[0]);
        // console.log(studStandard);
        var subjectsData = [];
        subjects.forEach(subject => {
            subjectsData.push(subject.subject_name);
        });
        res.status(201).send({
            success: true,
            message: 'Subjects readed successfully',
            subjects: subjectsData
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

//view students
export const readChapterController = async (req, res) => {
    try {
        const { standard, subject } = req.body;
        const chapters = await readChaptersFieldData(process.env.standardsCollectionName, standard, 'subjects', subject);
        // const studStandards = studStandard.docs;
        console.log(chapters);
        // console.log(studStandards[0]);
        // console.log(studStandard);
        res.status(201).send({
            success: true,
            message: 'Chapter readed successfully',
            chapters: chapters
        });
    } catch (error) {
        console.error('Error in reading chapter:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in reading chapters',
            error: error.message,
        });
    }
};

//view student attendance
export const uploadNotesController = async (req, res) => {
    try {
        const {
            standard, subject, chapter, url
        } = req.body;

        if (!standard) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!subject) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!chapter) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!url) {
            return res.send({ message: 'Url is not provided' });
        }
        console.log(url, standard);
        const updateChapter = await updateChapterUrl(process.env.standardsCollectionName, standard, 'subjects', subject, chapter, url);
        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            chapter: updateChapter,
            chapter_url: url
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};

//view student attendance
export const uploadTimetableController = async (req, res) => {
    try {
        const {
            standard, url
        } = req.body;

        if (!standard) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!url) {
            return res.send({ message: 'Url is not provided' });
        }
        const data = {
            standard: standard,
            url: url
        }
        console.log(url, standard);
        const syllabus = await createData(process.env.timetableCollectionName, standard, data);
        res.status(201).send({
            success: true,
            message: 'Timetable uploaded successfully',
            timetableUrl: url,
        });
    } catch (error) {
        console.error('Error in registration:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in registration',
            error: error.message,
        });
    }
};


//view student attendance
export const readTimetableController = async (req, res) => {
    try {
        const timetable = await readAllData(process.env.timetableCollectionName);
        res.status(201).send({
            success: true,
            message: 'timetable readed successfully',
            timetable: timetable,
        });
    } catch (error) {
        console.error('Error in reading timetable:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in reading timetable',
            error: error.message,
        });
    }
};