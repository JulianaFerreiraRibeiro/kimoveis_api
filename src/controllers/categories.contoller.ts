import { Request, Response } from "express";
import { createCategoryService } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    
    const newCategory = await createCategoryService(req.body)

    return res.status(201).json(newCategory)
}

export const readCategoriesController = (req: Request, res: Response) => {

    return res.status(200).json()
}

export const readCategoriesRealEstatesController = (req: Request, res: Response) => {

    return res.status(200).json()
}