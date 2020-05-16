import { ContactInfo } from "./contact-info";
export class InteractionRoutes {
  constructor(private contactInfo: ContactInfo) {}
  sendcontact(req, res) {
    return this.contactInfo.sendContactInfo(req, res);
  }
}
