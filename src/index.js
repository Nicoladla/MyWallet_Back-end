import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import authRouter from "./routers/authRouters.js";
import transactionRouter from "./routers/transactionRouters.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use(authRouter);
app.use(transactionRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`App running on port ${port}`));
