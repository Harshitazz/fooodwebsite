import jwt from "jsonwebtoken";
import { User } from "../models/users.js";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login first",
    });
  }
  const decoded = jwt.verify(token, "sjfldsjfjkddfsu");
  req.user = await User.findById({ _id: decoded._id });
  next();
};
