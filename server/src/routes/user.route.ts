import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { userValidator } from "../validators/user.validator";

const router = Router();
router.post("/", userValidator.register, userController.register);
router.put("/verify-email/:id/:token", userController.verifyEmail);
router.get("/:id", userController.getUser);


export default router;
