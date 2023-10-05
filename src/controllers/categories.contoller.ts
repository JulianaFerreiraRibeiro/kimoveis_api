import { Request, Response } from "express";

export const createCategoryController = (req: Request, res: Response) => {
    
    return res.status(201).json()
}

export const readCategoriesController = (req: Request, res: Response) => {

    return res.status(200).json()
}

export const readCategoriesRealEstatesController = (req: Request, res: Response) => {

    return res.status(200).json()
}