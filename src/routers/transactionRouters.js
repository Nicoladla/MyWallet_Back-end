import { Router } from "express";

import { postTransaction, getTransaction } from "../controllers/transactionController.js";

const router = Router();

router.post("/transactions", postTransaction);
router.get("/transactions", getTransaction);

export default router;
