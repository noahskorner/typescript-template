import express from "express";
import cors from "cors";
import db from "./db/models";
import router from "./routes";
import errorHandler from "./middleware/errorHandler";

// MIDDLEWARE
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(router);
app.use(errorHandler);

// DATABASE
db.sequelize.sync();
// const env = require("./config/env.config");
// if (env.NODE_ENV === "development" || "test") {
//   const seedDatabase = require("./db");
//   db.sequelize
//     .sync({ force: true })
//     .then(async () => {
//       console.log("Drop and re-sync db...");
//     })
//     .then(
//       seedDatabase().then(() => {
//         console.log("Seeding db...");
//       })
//     );
// }

export default app;
