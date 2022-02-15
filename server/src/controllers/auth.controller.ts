import { validationResult } from "express-validator";
import { userService } from "../services/user.service";
import jwt, { VerifyErrors } from "jsonwebtoken";
import catchAsync from "../middleware/catchAsync";
import { Request, Response } from "express";

const emailNotVerifiedResponse: ErrorType[] = [
  {
    msg: "Please verify your email before logging in.",
  },
];
const userNotFoundResponse: ErrorType[] = [
  {
    msg: "Your email or password is incorrect",
  },
];

class AuthController {
  public login = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) return res.status(401).json(userNotFoundResponse);
    if (!(await userService.checkPassword(user, password))) {
      return res.status(401).json(userNotFoundResponse);
    }
    if (!user.isVerified) return res.status(401).json(emailNotVerifiedResponse);

    const authResponse = await userService.generateAuthResponse(
      user.id,
      user.email,
      user.roles
    );
    return res.status(200).json(authResponse);
  });

  public refreshToken = catchAsync(async (req: Request, res: Response) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const refreshToken = req.body.token;

    // make sure this token is still active
    const isTokenActive = await userService.getIsTokenActive(refreshToken);
    if (!isTokenActive) return res.sendStatus(403);

    // verify the token
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET ?? "",
      async (error: VerifyErrors | null, user: any) => {
        if (error) {
          console.log(error);
          return res.sendStatus(403);
        }

        // issue new tokens
        const authResponse = await userService.generateAuthResponse(
          user.id,
          user.email,
          user.roles
        );
        return res.status(200).json(authResponse);
      }
    );
  });

  public logout = catchAsync(async (req: Request, res: Response) => {
    if (!req.user) return res.sendStatus(401);

    const userId = parseInt(req.user.id);

    await userService.logoutUser(userId);

    return res.sendStatus(200);
  });
}
const authController = new AuthController();

export { authController };
