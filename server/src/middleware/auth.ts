const authenticate = async (req, res, next) => {
  const jwt = require("jsonwebtoken");
const { UserRoles } = require("../models");

const authenticate = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};
};

const authorize = async (permittedRoles) => {
  return async () => {};
};

export { authenticate, authorize };
