import dotenv from "dotenv";
dotenv.config();

const config = process.env.NODE_ENV === "DEVELOPMENT"
  ? {
      user: process.env.USER,
      password: process.env.PASSWORD,
      host: process.env.HOST,
      port: process.env.DB_PORT,
      database: process.env.DATABASE,
      dialect: "postgres",
    }
  : {
      connectionString: process.env.DATABASE_URL,
      ssl: {
        rejectUnauthorized: false,
      },
      dialect: "postgres",
    };

module.exports = config;
