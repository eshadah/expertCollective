import { SetupEmailService } from "./interactions/setup-email";
import { InteractionRoutes } from "./interactions/routes";
import { ContactInfo } from "./interactions/contact-info";
import { PrepEmail } from "./interactions/prep-email";
import { SendEmail } from "./interactions/send-email";

export default function setupServices() {
  const setupEmailService = new SetupEmailService();
  const multipartMiddleware = setupEmailService.getMultipartMiddleware();

  const sendEmail = new SendEmail();
  const prepEmail = new PrepEmail();
  const contactInfo = new ContactInfo(prepEmail, sendEmail);
  console.log(contactInfo.temp);
  const interRoutes = new InteractionRoutes(contactInfo);
  return {
    multipartMiddleware,
    interRoutes,
  };
}
