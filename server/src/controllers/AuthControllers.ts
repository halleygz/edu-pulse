import { Request, Response } from "express";
import User from "../models/User";
import { loginTypes, UserTypes } from "../types/allTypes";
import bcrypt from "bcrypt";

const signUp = async (req: Request, res: Response) => {
  const { full_name, phone_number, username, email, password }: UserTypes = req.body;

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
    res.status(500).json({ message: "Internal Server Error" });
    console.log(error);
  }
};

const login = async (req: Request, res: Response) => {
    const { email, password }: loginTypes = req.body;
    
    try {
        const user = await User.findOne({ email });   
        if (user) {
            const passCheck = await bcrypt.compare(password, user.password);
            if (passCheck) {
                //gen cookie here
                res.status(200).json({ 
                    message: "login successful",
                    userId: user._id,
                    full_name: user.full_name,
                    email: user.email,
                    username: user.username,
                 });
            } else {
                res.status(400).json({ message: "invalid credentials" });
            }
        } else {
            res.status(400).json({ message: "invalid credentials" });
        }
    } catch (error: any) {
        res.status(500).json({ message: "Internal Server Error" });
        console.log("error occured during login", error);
    }
}

export { signUp, login };
