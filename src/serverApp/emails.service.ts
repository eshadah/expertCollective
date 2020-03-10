import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import { join } from 'path';

export class EmailService {

  private transporter: any;
  constructor() { 

  }

  configureTransporter() {
    console.log('EmailService');

    // const emailAuthConfig = fs.readFileSync('../../email-auth-config.json');
    // console.log('emailAuthConfig', emailAuthConfig);
    this.transporter = nodemailer.createTransport({
      service : 'gmail',
      auth : {
          user : 'support@expertcollective.org',
          pass : 'Supp0rt!'
      }
    })
  }
}
