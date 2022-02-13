import { Router } from "express";
import { authController } from "../controllers/auth.controller";

const router = Router();
router.put("/verify-email/:id/:token", authController.verifyEmail);

export default router;
