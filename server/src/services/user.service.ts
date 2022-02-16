import { genSalt, hash, compare } from "bcrypt";
import { randomBytes } from "crypto";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model";
import { mailService } from "./mail.service";
import { RefreshToken } from "../models/refreshToken.model";
import env from "../config/env.config";

interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

class UserService {
  public findUserByEmail = async (email: string): Promise<User | null> => {
    const user = await User.findOne({ where: { email } });

    return user;
  };

  public findUserById = async (id: number): Promise<User | null> => {
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

  public checkPassword = async (
    user: User,
    password: string
  ): Promise<boolean> => {
    return await compare(password, user.password);
  };

  public generateAuthResponse = async (
    id: string,
    email: string,
    roles: string[]
  ) => {
    const payload = { id, email, roles };

    const accessToken = jwt.sign(payload, env.ACCESS_TOKEN_SECRET, {
      expiresIn: env.ACCESS_TOKEN_EXPIRATION,
    });
    const refreshToken = jwt.sign(payload, env.REFRESH_TOKEN_SECRET, {
      expiresIn: env.REFRESH_TOKEN_EXPIRATION,
    });

    await RefreshToken.destroy({
      where: { userId: id },
    });
    await RefreshToken.create({ token: refreshToken, userId: id });

    return { accessToken, refreshToken };
  };

  public getIsTokenActive = async (token: string): Promise<boolean> => {
    const refreshToken = await RefreshToken.findOne({
      where: {
        token,
      },
    });

    return refreshToken !== null;
  };

  public logoutUser = async (userId: number) => {
    await RefreshToken.destroy({
      where: {
        userId,
      },
    });
  };

  private sendVerificationEmail = async (user: User) => {
    const mail = {
      from: "noahskorner@gmail.com",
      to: user.email,
      subject: "Welcome to typescript-template!",
      text: `${env.HOST}/user/verify-email/${user.id}/${user.verificationToken}`,
    };

    await mailService.sendMail(mail);
  };
}
const userService = new UserService();

export { userService, AuthResponse };
