import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../../repositories";
import AppError from "../../../error";

const handleId = async (req: Request, res: Response, next: NextFunction) => {

    const userId = Number(req.params.userId)

    const foundUser = await usersRepository.exist({where: {
        id: userId
    }})

    if(!foundUser){
        throw new AppError("User not found", 404)
    }

    return next()
}

export default handleId