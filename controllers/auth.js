import { StatusCodes } from "http-status-codes";
import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const register = async (req, res) => {
  const { username, email, fullName, password } = req.body;
  try {
    const isUserExists = await User.findOneAndRemove({ email: email });

    if (isUserExists) {
      throw new Error("User Already Exists With this Email");
    }

    //hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      fullName,
      email,
      password: hashPassword,
    });

    const token = jwt.sign(
      {
        userId: user._id,
        username: user.username,
        userEmail: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: process.env.JWT_LIFETIME,
      }
    );

    res.status(StatusCodes.CREATED).json({
      _id: user._id,
      email: user.email,
      fullName: user.fullName,
      token,
    });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .send("Ooops! Something Went Wrong", error);
  }
};

const login = async (req, res) => {
  res.send("Login");
};

export { register, login };
