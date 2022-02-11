import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
dotenv.config();

const sequelize =
  process.env.NODE_ENV === "DEVELOPMENT"
    ? new Sequelize(
        process.env.DATABASE,
        process.env.USER,
        process.env.PASSWORD,
        {
          host: process.env.HOST,
          dialect: "postgres",
          logging: false,
        }
      )
    : new Sequelize(process.env.CONNECTION_STRING, {
        dialect: "postgres",
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
        logging: false,
      });

export default sequelize;