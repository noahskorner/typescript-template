import { Request, Response, Router } from "express";
import user from "./user.route";
import auth from "./auth.route";
import { authenticate, authorize } from "../middleware/auth";

const router = Router();
router.get(
  "/",
  authenticate,
  authorize(["SUPERADMIN"]),
  async (req: Request, res: Response) => {
    return res.sendStatus(200);
  }
);
router.use("/user", user);
router.use("/auth", auth);

export default router;
