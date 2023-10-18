import { Request, Response } from "express";
import { createRealEstateService } from "../services/realEstates.service";

export const createRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const newRealEstate = await createRealEstateService(req.body)
    
    return res.status(201).json(newRealEstate)
}

export const readRealEstateController = (req: Request, res: Response): Response => {
    
    return res.status(200).json()
}