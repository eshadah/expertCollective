import * as nodemailer from "nodemailer";

export class SendEmail {
  transporter;
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "support@expertcollective.org",
        pass: "Supp0rt!",
      },
    });
  }

  sendEmail(email) {
    if (email) {
      this.transporter.sendMail({
        from: email.from,
        to: email.to,
        subject: email.subject,
        text: email.text,
        html: email.html,
      });
    }
  }
}
