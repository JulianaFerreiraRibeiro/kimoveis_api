import { NextFunction, Request, Response } from "express";
import AppError from "../../../error";

const handlePermission = (req: Request, res: Response, next: NextFunction) => {

    const {sub, admin} = res.locals.decoded
    
    const {userId} = req.params
    
    if (admin) return next()

    if(userId !== sub){
        throw new AppError("Insufficient permission", 403)
    }
}

export default handlePermission