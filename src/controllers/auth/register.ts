import { NextFunction, Request, Response } from "express";
import { registerAction } from "../../actions/auth/registerAction";

export const register = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        
        const user = await registerAction(req.body, req.file?.path)
        res.status(user.status).send(user)
    } catch (error) {
        console.log(error);
        next(error)
    }
}