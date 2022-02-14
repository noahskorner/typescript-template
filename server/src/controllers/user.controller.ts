import { validationResult } from "express-validator";
import { userService } from "../services/user.service";
import dotenv from "dotenv";
dotenv.config();

class UserController {
  public register = async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()) {
      return res.status(400).json(err);
    }

    const { email, password1 } = req.body;
    await userService.createUser(email, password1);

    return res.sendStatus(200);
  };

  public getUser = async (req, res) => {
    const userId = req.params.id;

    const user = await userService.findUserById(userId);

    if (user === null) return res.sendStatus(400);

    return res.status(200).json(user);
  };
}
const userController = new UserController();

export { userController };
