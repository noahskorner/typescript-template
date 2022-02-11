import sequelize from "../config/db.config";
import Sequelize from "sequelize";
import { User } from "./user.model";
import { RefreshToken } from "./refreshToken.model";

sequelize.addModels([User, RefreshToken]);

const db = {
  Sequelize,
  sequelize,
  User,
  RefreshToken,
};

export default db;
