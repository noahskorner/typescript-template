import jwt, { VerifyErrors } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import env from "../config/env.config";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    env.ACCESS_TOKEN_SECRET,
    (err: VerifyErrors | null, user: any) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    }
  );
};

const authorize = async (permittedRoles: string[]) => {
  return async () => {};
};

export { authenticate, authorize };
