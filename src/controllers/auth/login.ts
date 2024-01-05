import { NextFunction, Request, Response } from "express";
import { loginAction } from "../../actions/auth/loginAction";


export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log(req.body);
    
    const { usernameOrEmail, password } = req.body;
    const result = await loginAction(usernameOrEmail, password);

    res.status(result.status).send(result);
  } catch (error) {
    next(error);
  }
};
