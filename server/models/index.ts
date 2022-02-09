import sequelize from "../config/db.config";
import Sequelize from "sequelize";
import { User } from "./User.model";
import { RefreshToken } from "./RefreshToken";

sequelize.addModels([User, RefreshToken]);

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  User: User,
};

export default db;
