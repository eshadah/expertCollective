import { ContactInfo } from "./contact-info";
export class InteractionRoutes {
  constructor(private contactInfo: ContactInfo) {}
  sendcontact(req, res) {
    console.log("sendcontact", req.body);
    return this.contactInfo.sendContactInfo(req, res);
  }
}
