import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Configure env
dotenv.config();
export const mail = (gmail) => {
    console.log("Gmail&Pass: "+gmail);
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.authacc,
        pass: process.env.authpass,
      }
    });
    
    var mailOptions = {
      from: 'ayush.s.sharma04@gmail.com',
      to: gmail,
      subject: 'Employee Portal Registration',
      text: 'You have been registered',
    };
    console.log("hiii");
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
    });
    console.log("hiii");
    }