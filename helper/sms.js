import twilio from 'twilio';
import dotenv from 'dotenv';

// Configure env
dotenv.config();

export const sms = (contact) => {
  const accountSid = process.env.accountSid;
  const authToken = process.env.authToken;

  console.log('Account SID:', accountSid);

  const client = twilio(accountSid, authToken);

  client.messages
    .create({
      body: 'You have been registered SMS',
      from: '+15203143716', // your Twilio phone number
      to: '+91' + contact // recipient phone number
    })
    .then(message => console.log('SMS sent:', message.sid))
    .catch(error => console.error('Error sending SMS:', error));
};
