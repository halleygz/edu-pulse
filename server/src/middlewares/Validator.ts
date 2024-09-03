import Joi, { ObjectSchema } from "joi";
import { NextFunction, Request, Response } from "express";
import { UserTypes, loginTypes } from "../types/allTypes";

export function ValidatorSchema(schema: ObjectSchema) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validateAsync(req.body);
      next();
    } catch (error: any) {
      return res
        .status(400)
        .json({
          message: "Object Validation failed, please enter required field",
        });
    }
  };
}

export const Schemas = {
  user: {
    signup: Joi.object<UserTypes>({
      full_name: Joi.string().required(),
      phone_number: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string()
        .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
      password: Joi.string().required(),
    }),
    login: Joi.object<loginTypes>({
      email: Joi.string()
        .regex(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/)
        .required(),
      password: Joi.string().required(),
    }),
  },
};
