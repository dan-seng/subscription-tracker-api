import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';

export const accountEmail = 'dan16son@gmail.com';

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,        // use 587 for TLS (not 465)
  secure: false,    // false for port 587
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD, // your app password
  },
});

export default transporter;
