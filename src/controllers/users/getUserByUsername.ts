import { NextFunction, Request, Response } from "express";
import { registerAction } from "../../actions/auth/registerAction";
import { getUserByUsernameAction } from "../../actions/users/getUserByUsernameAction";

export const getUserByUsername = async (req:Request, res:Response, next:NextFunction) =>{
    try {
        const{username} = req.params
        const user = await getUserByUsernameAction(username)
        res.status(user.status).send(user)
    } catch (error) {
        console.log(error);
        next(error)
    }
}