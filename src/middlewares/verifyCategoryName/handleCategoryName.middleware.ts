import { NextFunction, Request, Response } from "express";
import { categoriesRepository } from "../../repositories";
import AppError from "../../../error";

const handleCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const {name} = req.body
    if(name){
        const categoryName = await categoriesRepository.exist({where: {
            name: name
        }})

        if(categoryName){
            throw new AppError("Category already exists", 409)
        }
    }

    return next()
}

export default handleCategoryName