import { Router } from "express";

import { signUp, signIn, signOut } from "../controllers/authController.js";
import tokenValidation from "../middlewares/tokenValidationMiddleware.js";

const router = Router();

router.post("/sign-up", signUp);
router.post("/sign-in", signIn);
router.delete("/sign-out", tokenValidation, signOut);

export default router;
