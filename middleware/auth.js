import jwt from "jsonwebtoken";
import { UnAuthenticatedError } from "../errors/index.js";
import User from "../models/user.js";

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new UnAuthenticatedError("Authentication Invalid!");
  }

  const token = authHeader.split(" ")[1];

  try {
    const payload = jwt.sign(token, process.env.JWT_SECRET);

    req.user = await User.findById(payload.userId).select("-password");
  } catch (error) {
    throw new UnAuthenticatedError("Authenticated Invalid!");
  }
  next();
};

export default auth;
