import { Sequelize } from "sequelize-typescript";

const sequelize =
  process.env.NODE_ENV === "development" || "test"
    ? new Sequelize(
        process.env.DATABASE ?? '',
        process.env.USER ?? '',
        process.env.PASSWORD ?? '',
        {
          host: process.env.DB_HOST ?? '',
          dialect: "postgres",
          logging: false,
        }
      )
    : new Sequelize(process.env.CONNECTION_STRING ?? '', {
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
