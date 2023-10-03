import { Request, Response } from "express";

export const createScheduleController = (req: Request, res: Response): Response => {

    return res.status(201).json()
}

export const readScheduleRealEstateController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}