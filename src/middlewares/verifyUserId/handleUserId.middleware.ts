import { NextFunction, Request, Response } from "express";
import AppError from "../../../error";

const handleUserId = (req: Request, res: Response, next: NextFunction): void => {

    const {admin, sub} = res.locals.decoded
    
    const { userId } = req.params

    if(admin){
        return next()
    }else if(userId != sub){
        throw new AppError("Insufficient permission", 403)
    }

    return next()
}

export default handleUserId