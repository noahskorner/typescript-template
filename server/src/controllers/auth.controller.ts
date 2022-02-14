import { validationResult } from "express-validator";
import { userService } from "../services/user.service";
import { ErrorType } from "../types/global.types";
import catchAsync from "../middleware/catchAsync";

const emailNotVerifiedResponse: ErrorType[] = [
  {
    msg: "Please verify your email before logging in.",
  },
];
const userNotFoundReponse: ErrorType[] = [
  {
    msg: "Your email or password is incorrect",
  },
];

class AuthController {
  public login = catchAsync(async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const { email, password } = req.body;

    const user = await userService.findUserByEmail(email);
    if (!user) return res.status(401).json(userNotFoundReponse);
    if (!(await userService.checkPassword(user, password))) {
      return res.status(401).json(userNotFoundReponse);
    }
    if (!user.isVerified) return res.status(401).json(emailNotVerifiedResponse);

    const authResponse = await userService.generateAuthResponse(user);
    return res.status(200).json(authResponse);
  });

  public refreshToken = catchAsync(async (req, res) => {
    return res.sendStatus(200);
  });

  public logout = catchAsync(async (req, res) => {
    return res.sendStatus(200);
  });
}
const authController = new AuthController();

export { authController };
