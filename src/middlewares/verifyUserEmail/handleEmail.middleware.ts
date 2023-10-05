import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../../repositories";
import AppError from "../../../error";

const handleEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const { email } = req.body

    if(email){
        const emailExists = await usersRepository.exist({where: {email: email}})
        
        if(emailExists){
            throw new AppError("Email already exists", 409)
        }
    }

    return next()
    
}

export default handleEmail