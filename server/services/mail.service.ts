import transporter from "../config/smtp.config";

class MailService {
  public sendMail = async (mail) => {
    transporter.sendMail(mail);
  };
}
const mailService = new MailService();

export { mailService };
