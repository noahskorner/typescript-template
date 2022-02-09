import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./models";
dotenv.config();

// MIDDLEWARE
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// DATABASE
//db.sequelize.sync();
db.sequelize.sync({ force: true }).then(async () => {
  console.log("Drop and re-sync db...");
});

// START SERVER
const port = process.env.PORT ? process.env.PORT : 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
