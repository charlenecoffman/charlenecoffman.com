import emailjs from "emailjs-com";
import Email from "../models/Email";

export interface IEmailStore {
  sendContactUsEmail: (email: Email) => Promise<void>;
}

export default class EmailStore implements IEmailStore {
  public async sendContactUsEmail(email: Email) {
    var emailToSend = {
      from_name: email.from_name,
      email_address: email.email_address,
      message: email.message,
    };
    console.log(emailToSend);
    emailjs.send("personalgmail", "template_gvz4yla", emailToSend, "user_3IabaTk3eBEeonKL6yOxh");
  }
}
