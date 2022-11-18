import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routers/authRouters.js";
import walletRouter from "./routers/walletRouters.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(walletRouter);

app.listen(process.env.PORT_EXPRESS, () =>
  console.log(`App running on port ${process.env.PORT_EXPRESS}`)
);
