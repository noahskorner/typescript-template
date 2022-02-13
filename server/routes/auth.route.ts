import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { authValidator } from "../validators/auth.validator";

const router = Router();
router.post("/login", authValidator.login, authController.login);
router.put("/verify-email/:id/:token", authController.verifyEmail);

export default router;
