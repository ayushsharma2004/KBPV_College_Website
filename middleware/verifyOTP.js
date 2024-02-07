import twilio from 'twilio';
import dotenv from 'dotenv';
import { readSingleData } from '../helper/crumd.js';
import JWT from 'jsonwebtoken';

// Configure env
dotenv.config();

export const verifyOTP = async (req, res, next) => {
    const { phone, code, role } = req.body;

    const accountSid = process.env.accountSid;
    const authToken = process.env.authToken;
    const twilio_service_sid = process.env.twilio_service_sid;
    console.log('Account SID:', accountSid);

    const client = twilio(accountSid, authToken);
    try {
        const verificationCheck = await client.verify.v2.services(twilio_service_sid).verificationChecks.create({
            to: `+91${phone}`,
            code,
        });

        if (verificationCheck.status === 'approved') {
            // Code is valid, perform user authentication here
            // You can use Firebase Authentication to sign in the user
            var user
            if (role === 0) {
                user = await readSingleData(process.env.studentsCollectionName, phone);
            } else if (role === 1) {
                user = await readSingleData(process.env.teachersCollectionName, phone);
            }

            //token
            const token = await JWT.sign(
                { _id: phone },
                process.env.JWT_token,
                {
                    expiresIn: '7d',
                }
            );
            req.body.verify =
            {
                success: true,
                verificationCheck,
                user,
                token
            }
            req.verify =
            {
                success: true,
                verificationCheck,
                user,
                token
            }
            next();
        } else {
            res.status(401).json(
                {
                    success: false,
                    message: 'Invalid verification code',
                }
            );
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error.message });
    }
};
