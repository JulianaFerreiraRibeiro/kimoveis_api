import { Request, Response } from "express";
import { readSchedulesRealEstateService } from "../services/schedules.service";

export const createScheduleController = async (req: Request, res: Response): Promise<Response> => {

    const {id} = res.locals.decoded

    await createScheduleController(req.body, id)
    return res.status(201).json({message: 'Schedule created'})
}

export const readScheduleRealEstateController = async (req: Request, res: Response): Promise<Response> => {

    const schedulesRealEstate = await readSchedulesRealEstateService(Number(req.params.id))

    return res.status(200).json(schedulesRealEstate)

}