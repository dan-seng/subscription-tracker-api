import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';


export const accountEmail = 'dan16son@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: accountEmail,
    pass: EMAIL_PASSWORD,
  },
});

export default transporter;