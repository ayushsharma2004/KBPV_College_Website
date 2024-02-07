import { admin } from "../DB/firestore.js";
const db = admin.firestore();
import { createData, matchData, matchTwoData, readAllData } from "../helper/crumd.js";

export const studentRegisterController = async (req, res) => {
    try {
        const { phone, fname, lname, mother, father, standard, address, age, roll_id, division, class_teacher, attendance } = req.body;
        //validation
        if (!phone) {
            return res.send({ message: 'phone is required' });
        }
        if (!fname) {
            return res.send({ message: 'First Name is required' });
        }
        if (!lname) {
            return res.send({ message: 'Last Name is required' });
        }
        if (!mother) {
            return res.send({ message: 'Mother name is required' });
        }
        if (!father) {
            return res.send({ message: 'Father name is required' });
        }
        if (!roll_id) {
            return res.send({ message: 'Roll Id is required' });
        }
        if (!standard) {
            return res.send({ message: 'Standard is required' });
        }
        if (!address) {
            return res.send({ message: 'Address is required' });
        }
        if (!age) {
            return res.send({ message: 'Age is required' });
        }
        if (!division) {
            return res.send({ message: 'Division is required' });
        }
        if (!class_teacher) {
            return res.send({ message: 'Class teacher is required' });
        }

        //existing student
        const querySnapshot = await matchData(process.env.studentsCollectionName, "phone", phone);
        if (!querySnapshot.empty) {
            return res.status(200).send({
                success: false,
                message: 'Student already registered. Please login.',
            });
        }

        const userJson = {
            phone: phone,
            fname: fname,
            lname: lname,
            mother: mother,
            father: father,
            standard: standard,
            address: address,
            age: age,
            roll_id: roll_id,
            division: division,
            class_teacher: class_teacher,
            attendance: attendance,
            role: 0
        };
        const userId = phone; // Use phone as the document ID

        //create database
        await createData(process.env.studentsCollectionName, userId, userJson);
        console.log('success');

        return res.status(201).send({
            success: true,
            message: 'Student registered successfully',
            user: userJson
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
export const viewStudentController = async (req, res) => {
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

//register teacher
export const teachersRegisterController = async (req, res) => {
    try {
        const {
            phone,
            fname,
            lname,
            email,
            description,
            education,
            education_desc,
            expertise,
            standard,
            division,
            address,
            age,
            experience
        } = req.body;

        if (!phone) {
            return res.send({ message: 'Usernme is not provided' });
        }
        if (!fname) {
            return res.send({ message: 'Name is required' });
        }
        if (!lname) {
            return res.send({ message: 'Name is required' });
        }
        if (!email) {
            return res.send({ message: 'Email is required' });
        }
        if (!standard) {
            return res.send({ message: 'Standard is required' });
        }
        if (!division) {
            return res.send({ message: 'Division is required' });
        }
        if (!description) {
            return res.send({ message: 'Description is required' });
        }
        if (!education) {
            return res.send({ message: 'Education is required' });
        }
        if (!education_desc) {
            return res.send({ message: 'Education is required' });
        }
        if (!expertise) {
            return res.send({ message: 'Expertise is required' });
        }
        if (!address) {
            return res.send({ message: 'Address is required' });
        }
        if (!age) {
            return res.send({ message: 'Age is required' });
        }
        if (!experience) {
            return res.send({ message: 'Experience is required' });
        }

        //existing teacher
        const querySnapshot = await matchData(process.env.teachersCollectionName, "phone", phone);
        if (!querySnapshot.empty) {
            return res.status(200).send({
                success: false,
                message: 'Teacher already registered. Please login.',
            });
        }

        const userJson = {
            phone: phone,
            fname: fname,
            lname: lname,
            email: email,
            standard: standard,
            division: division,
            description: description,
            education: education,
            education_desc: education_desc,
            address: address,
            age: age,
            expertise: expertise,
            experience: experience,
            approved: true,
            role: 1,
        };

        // Save mentors details to Firestore
        await createData(process.env.teachersCollectionName, phone, userJson);
        console.log('Teacher registered successfully');

        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            user: userJson,
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
export const viewTeacherController = async (req, res) => {
    try {
        const teachers = await readAllData(process.env.teachersCollectionName);
        // const studStandards = studStandard.docs;
        // console.log(studStandards[0]);
        // console.log(studStandard);
        res.status(201).send({
            success: true,
            message: 'Teacher registered successfully',
            teachers: teachers,
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


//register teacher
export const standardsRegisterController = async (req, res) => {
    try {
        const { standard, subjects, chapters } = req.body;

        if (!standard) {
            return res.send({ message: 'Standard is not provided' });
        }
        if (!subjects) {
            return res.send({ message: 'Subjects are required' });
        }
        if (!chapters) {
            return res.send({ message: 'Chapters are required' });
        }

        const data = {
            subjects: [],
        };

        subjects.forEach((subject) => {
            // Each subject is now an object with a name property
            const subjectData = {
                subject_name: subject,
                chapters: [],
            };

            chapters.forEach((chapter) => {
                // Add chapter details to the subjectData
                var chapterData = chapter;
                chapterData.subject_name = subject;
                subjectData.chapters.push(chapter);
            });

            // Add subjectData to the data object
            data.subjects.push(subjectData);
        });

        // Save data to Firestore
        await createData(process.env.standardsCollectionName, standard, data);
        console.log('Data registered successfully');

        res.status(201).send({
            success: true,
            message: 'Data registered successfully',
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
