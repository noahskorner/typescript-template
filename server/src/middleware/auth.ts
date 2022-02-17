import jwt, { VerifyErrors } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import env from "../config/env.config";
import { UserRole } from "../models/userRole";
import { Role } from "../models/role.model";

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(
    token,
    env.ACCESS_TOKEN_SECRET,
    (err: VerifyErrors | null, user: any) => {
      req.user = user;
      next();
    }
  );
};

const authorize = (permittedRoles: Array<"ADMIN" | "SUPERADMIN">) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) return res.sendStatus(401);
    const userId = req.user.id;

    UserRole.findAll({ where: { userId }, include: Role})
      .then((data) => {
        const roles = data.map((userRole) => userRole.role.name);
        if (
          permittedRoles.some((permittedRole) => roles.includes(permittedRole))
        ) {
          next();
        } else {
          return res.sendStatus(403);
        }
      })
      .catch((error) => {
        return res.sendStatus(403);
      });
  };
};

export { authenticate, authorize };
