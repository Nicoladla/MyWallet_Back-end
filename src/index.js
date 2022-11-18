import express from "express";
import cors from "cors";
import joi from "joi";
import dotenv from "dotenv";

import {} from "./controllers/authController.js";
import {} from "./controllers/walletController.js";
import {} from "./controllers/sessionsController.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.listen(process.env.PORT_EXPRESS, () =>
  console.log(`App running on port ${process.env.PORT_EXPRESS}`)
);
