import { Request, Response } from "express";
import { createCategoryService, readCategoriesRealEstateService, readCategoriesService } from "../services/categories.service";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    
    const newCategory = await createCategoryService(req.body)

    return res.status(201).json(newCategory)
}

export const readCategoriesController = async (req: Request, res: Response): Promise<Response> => {

    const categories = await readCategoriesService()

    return res.status(200).json(categories)
}

export const readCategoriesRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const categoriesRealEstate = await readCategoriesRealEstateService(Number(req.params.id))

    return res.status(200).json(categoriesRealEstate)
}