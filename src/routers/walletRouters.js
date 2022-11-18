import { Router } from "express";

import { postWallet, getWallet } from "../controllers/walletController.js";

const router = Router();

router.post("/wallet", postWallet);
router.get("/wallet", getWallet);

export default router;
