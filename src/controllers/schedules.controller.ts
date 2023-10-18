import { Request, Response } from "express";

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const {id} = res.locals.decoded

    await createScheduleController(req.body, id)
    return res.status(201).json({message: 'Schedule created'})
}

export const readScheduleRealEstateController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}