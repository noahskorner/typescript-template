import { Request, Response, Router } from "express";
import userRoutes from "./user.route";
import authRoutes from "./auth.route";

const router = Router();
router.get("/", async (req: Request, res: Response) => {
  return res.sendStatus(200);
});
router.use("/user", userRoutes);
router.use("/auth", authRoutes);

export default router;
