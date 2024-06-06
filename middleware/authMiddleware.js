import JWT from 'jsonwebtoken';
import { admin } from '../DB/firestore.js';
import { readSingleData } from '../helper/crumd.js';
const db = admin.firestore();

export const requireSignIn = async (req, res, next) => {
    try {
        const token = req.headers.authorization; // Get the token from the request headers
        console.log(token);
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is required. Please login again.',
            });
        }

        const decode = JWT.verify(token, process.env.JWT_token);
        req.token = decode;
        console.log(decode);
        next();
    } catch (error) {
        console.error('Error in token verfication:', error);
        return res.status(500).send({
            success: false,
            message: 'Error in token verfication',
            error: error.message,
        });
    }
};

//admin access
export const isAdmin = async (req, res, next) => {
    try {
        const { phone, role } = req.body;
        const user = await readSingleData(process.env.teachersCollectionName, phone);
        if (role !== 2) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Access',
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Error in Admin Access',
            error: error,
        });
    }
};

//admin access
export const isTeacher = async (req, res, next) => {
    try {
        const { phone, role } = req.body;
        const user = await readSingleData(process.env.teachersCollectionName, phone);
        console.log(user);
        if (!(role >= 1)) {
            return res.status(401).send({
                success: false,
                message: 'Unauthorized Access',
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(401).send({
            success: false,
            message: 'Error in Admin Access',
            error: error,
        });
    }
};
