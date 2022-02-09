import { User } from "../models/user.model";

const register = async (req, res) => {
  await User.create({
    email: "noahskorner@gmail.com",
  });

  return res.sendStatus(200);
};

export { register };
