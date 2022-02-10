import { User } from "../models/user.model";

class UserService {
  public findUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });

    return user;
  };
}
const userService = new UserService();

export { userService };
