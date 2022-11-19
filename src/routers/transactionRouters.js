import { Router } from "express";

import { postTransaction, getTransaction } from "../controllers/transactionController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js"

const router = Router();

router.use(tokenValidation)
router.post("/transaction", postTransaction);
router.get("/transaction", getTransaction);

export default router;
