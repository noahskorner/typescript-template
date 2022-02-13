import { userService } from "../services/user.service";

class AuthController {
  public verifyEmail = async (req, res) => {
    const userId = req.params.id;
    const verificationToken = req.params.token;

    const user = await userService.findUserByVerificationToken(
      userId,
      verificationToken
    );

    if (!user || user.isVerified) {
      return res.sendStatus(400);
    }

    await user.update({
      isVerified: true,
    });

    return res.sendStatus(200);
  };
}
const authController = new AuthController();

export { authController };
