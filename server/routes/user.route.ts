import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { userValidator } from "../validators/user.validator";

const router = Router();
router.post("/", userValidator.register, userController.register);
router.get("/:id", userController.getUser);

export default router;
