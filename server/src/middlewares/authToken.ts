import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../config";
import User from "../models/User";
import { IUser } from "../types/modelTypes/UserType";

//Extend the Request interface to include the user property
interface AuthRequested extends Request {
  user?: IUser;
}

// Middleware to check if user is authenticated
const authenticatToken = async (
  req: AuthRequested,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {//ensures that the token is valid and was signed with the application's secret.
    const decoded = jwt.verify(token, config.jwt.secret) as { id: string };
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error: any) {
    return res.status(403).json({ message: "Unauthorized" });
  }
};

export { authenticatToken, AuthRequested };
