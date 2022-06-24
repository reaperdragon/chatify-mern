import express from "express";
const router = express.Router();
import { register, login, searchUser } from "../controllers/auth.js";

import authenticateUser from "../middleware/auth.js";

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/users").get(authenticateUser, searchUser);

export default router;
