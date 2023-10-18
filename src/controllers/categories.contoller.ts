import { Request, Response } from "express";
import { createCategoryService, readCategoriesService } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    
    const newCategory = await createCategoryService(req.body)

    return res.status(201).json(newCategory)
}

export const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await readCategoriesService()

    return res.status(200).json(categories)
}

export const readCategoriesRealEstatesController = (req: Request, res: Response) => {

    return res.status(200).json()
}