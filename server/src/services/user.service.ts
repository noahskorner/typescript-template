import { genSalt, hash, compare } from "bcrypt";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { mailService } from "./mail.service";
import dotenv from "dotenv";
import { RefreshToken } from "../models/refreshToken.model";
dotenv.config();

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

class UserService {
  public findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

  public findUserById = async (id): Promise<User | null> => {
    const user = await User.scope("full").findByPk(id);

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

  public checkPassword = async (
    user: User,
    password: string
  ): Promise<boolean> => {
    return await compare(password, user.password);
  };

  public generateAuthResponse = async (user: User) => {
    const accessToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRATION,
      }
    );
    const refreshToken = jwt.sign(
      { id: user.id, email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRATION,
      }
    );

    await RefreshToken.destroy({
      where: { userId: user.id },
    });
    await RefreshToken.create({ token: refreshToken, userId: user.id });

    return { accessToken, refreshToken };
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

export { userService, AuthResponse };
