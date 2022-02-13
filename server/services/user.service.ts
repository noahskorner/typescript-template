import { genSalt, hash } from "bcrypt";
import { randomBytes } from "crypto";
import { User } from "../models/user.model";
import { mailService } from "./mail.service";

class UserService {
  public findUserByEmail = async (email): Promise<User | null> => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

  public findUserById = async (id): Promise<User | null> => {
    const user = await User.findByPk(id);

    return user;
  };

  public findUserByVerificationToken = async (
    id: number,
    verificationToken: string
  ): Promise<User | null> => {
    const user = await User.findOne({
      where: {
        id,
        verificationToken,
      },
    });

    return user;
  };

  public createUser = async (email: string, password: string) => {
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const verificationToken = randomBytes(25).toString("hex");
    const user = await User.create({
      email: email,
      password: hashedPassword,
      verificationToken: verificationToken,
    });
    await this.sendVerificationEmail(user);
  };

  private sendVerificationEmail = async (user: User) => {
    const mail = {
      from: "noahskorner@gmail.com",
      to: user.email,
      subject: "Welcome to typescript-template!",
      text: `${process.env.HOST}/auth/verify-email/${user.id}/${user.verificationToken}`,
    };

    await mailService.sendMail(mail);
  };
}
const userService = new UserService();

export { userService };
