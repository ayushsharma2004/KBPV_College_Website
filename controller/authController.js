import { admin } from "../DB/firestore.js";
const db = admin.firestore();
import { comparePassword, hashPassword } from '../helper/authHelper.js';
import JWT from 'jsonwebtoken';
import { createData, matchData } from "../helper/crumd.js";


export const studentsLoginController = async (req, res) => {
  try {
    const { phone, verify } = req.body;
    //Validtion
    if (!phone) {
      return res.status(404).send({
        success: false,
        message: 'Invalid phone number',
      });
    }
    //Retrieve user data
    const querySnapshot = await matchData(process.env.studentsCollectionName, 'phone', phone);
    let userData = null;
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });

    //validating user
    if (!userData) {
      return res.status(404).send({
        success: false,
        message: 'Student is not registered',
      });
    }

    res.status(200).send({
      success: true,
      message: 'Login successfully',
      user: {
        phone: userData.phone,
        fname: userData.fname,
        lname: userData.lname,
        mother: userData.mother,
        father: userData.father,
        standard: userData.standard,
        address: userData.address,
        age: userData.age,
        roll_id: userData.roll_id,
        class_name: userData.class_name,
        class_teacher: userData.class_teacher
      },
      verify: verify
    });
    console.log('success');
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login of student',
      error: error,
    });
  }
};

export const teachersLoginController = async (req, res) => {
  try {
    const { phone, verify } = req.body;
    //Validtion
    if (!phone) {
      return res.status(404).send({
        success: false,
        message: 'Invalid phone number',
      });
    }
    //Retrieve user data
    const querySnapshot = await matchData(process.env.teachersCollectionName, 'phone', phone);
    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });

    //validating user
    if (!userData) {
      return res.status(404).send({
        success: false,
        message: 'Teacher is not registered',
      });
    }
    res.status(200).send({
      success: true,
      message: 'Login successfully',
      user: {
        phone: userData.phone,
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        description: userData.description,
        education: userData.education,
        education_desc: userData.education_desc,
        expertise: userData.expertise,
        standard: userData.education_desc,
        division: userData.division,
        address: userData.address,
        age: userData.age,
        experience: userData.experience,
        approved: userData.approved,
        role: userData.role,
      },
      verify: verify
    });
    console.log('success');
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login of mentor',
      error: error,
    });
  }
};


export const adminLoginController = async (req, res) => {
  try {
    const { phone } = req.body;
    //Validtion
    if (!phone) {
      return res.status(404).send({
        success: false,
        message: 'Invalid phone number',
      });
    }
    //Retrieve user data
    const querySnapshot = await matchData(process.env.adminCollectionName, 'phone', phone);
    let userData = null;
    querySnapshot.forEach((doc) => {
      userData = doc.data();
    });

    //validating user
    if (!userData) {
      return res.status(404).send({
        success: false,
        message: 'Teacher is not registered',
      });
    }

    //validating user
    if (!userData.role !== 2) {
      return res.status(404).send({
        success: false,
        message: 'User is not an admin',
      });
    }

    res.status(200).send({
      success: true,
      message: 'Login successfully',
      user: {
        phone: userData.phone,
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        contact: userData.contact,
        address: userData.address,
        age: userData.age,
        education: userData.education,
        education_desc: education_desc,
        expertise: userData.expertise,
        experience: userData.experience,
        approved: userData.approved,
        role: userData.role,
      }
    });
    console.log('success');
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: 'Error in login of mentor',
      error: error,
    });
  }
};
