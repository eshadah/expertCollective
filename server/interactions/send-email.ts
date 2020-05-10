import * as url from "url";
import * as config from "../config/config-int.json";

export class SendEmail {
  private expertCollectiveURL: string;
  constructor() {
    const hostname = config.expertCollective.hostname;
    const link = {
      protocol: "http",
      slashes: true,
      hostname: hostname,
    };
    this.expertCollectiveURL = url.format(link);
  }

  emailContactInfo(req: any, res: any) {
    console.log("[Messages] emailContactInfo()");
    console.log("[Messages][emailContactInfo] body ", req.body);
    const userEmail = req.body.userEmail;
    const userPhone = req.body.userPhone;
    const userName = req.body.userName;
    const message = req.body.message;
    const subject = req.body.subject;

    console.log("[Messages][emailContactInfo] userEmail: " + userEmail);
    console.log("[Messages][emailContactInfo] userPhone: " + userPhone);
    console.log("[Messages][emailContactInfo] userName: " + userName);
    console.log("[Messages][emailContactInfo] message: " + message);
    console.log("[Messages][emailContactInfo] subject: " + subject);

    // fix messaging for user
    if (!userEmail || !userName || !message || !subject) {
      console.log(
        "[ERROR][Messages][emailSendContact] Some parameter is NULL."
      );

      res.send({ success: false });
      return;
    }
    let emailPrep = {
      to: "support@expertcollective.org",
      // from: userEmail,
      subject: "[Ping&Meet][Contact] - " + subject,
      html: "userContact",
      context: {
        message:
          message + " | " + userName + " | " + userEmail + " | " + userPhone,
        link: this.expertCollectiveURL,
      },
    };

    res.send({ success: true }); // Bad practice
  }
}
