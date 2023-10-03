import { Request, Response } from "express";

export const createRealEstateController = (req: Request, res: Response): Response => {
    
    return res.status(201).json()
}

export const readRealEstateController = (req: Request, res: Response): Response => {
    
    return res.status(200).json()
}