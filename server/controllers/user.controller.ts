import { validationResult } from "express-validator";
import { User } from "../models/user.model";

class UserController {
  public register = async (req, res) => {
    const err = validationResult(req);
    if (!err.isEmpty()){
      return res.status(400).json(err);
    }
    
    const { email, password1 } = req.body;

    await User.create({
      email: email,
      password: password1,
    });

    return res.sendStatus(200);
  };
}
const userController = new UserController();

export { userController };
