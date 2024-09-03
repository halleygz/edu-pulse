import { Request, Response } from "express";
import User from "../models/User";
import { UserTypes } from "../types/allTypes";

const signUp = async (req: Request, res: Response) => {
  const { full_name, phone_number, username, email, password }: UserTypes =
    req.body;

  try {
    const user = await User.create({
      full_name,
      phone_number,
      username,
      email,
      password,
    });

    if (user) {
      //gen cookie here

      res.status(201).json({ user });
    } else {
      res.status(400).json({ message: "couldn't create user:" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
    console.log(error);
  }
};

export { signUp };
