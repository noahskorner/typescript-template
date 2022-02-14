import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import db from "./models";
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
// db.sequelize.sync({ force: true }).then(async () => {
//   console.log("Drop and re-sync db...");
// });

// START SERVER
const port = process.env.PORT ? process.env.PORT : 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
