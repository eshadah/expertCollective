import { SendEmail } from "./send-email";
export class InteractionRoutes {
  private sendEmail: SendEmail;
  constructor() {
    this.sendEmail = new SendEmail();
  }
  sendcontact(req, res) {
    return this.sendEmail.emailContactInfo(req, res);
  }
}
