import { SetupEmailService } from "./interactions/setup-email";
import { InteractionRoutes } from "./interactions/routes";
import { ContactInfo } from "./interactions/contact-info";
import { PrepEmail } from "./interactions/prep-email";
import { SendEmail } from "./interactions/send-email";
const setupEmailService = new SetupEmailService();
export const multipartMiddleware = setupEmailService.getMultipartMiddleware();

const sendEmail = new SendEmail();
const prepEmail = new PrepEmail();
const contactInfo = new ContactInfo(prepEmail, sendEmail);
export const interRoutes = new InteractionRoutes(contactInfo);
