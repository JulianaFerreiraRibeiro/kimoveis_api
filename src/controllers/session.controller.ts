import { Request, Response } from "express";
import { ReturnSession } from "../interfaces/session.interface";
import { sessionUserService } from "../services/session.service";

export const sessionUserController = async (req: Request, res: Response): Promise<Response> => {

    const token: ReturnSession = await sessionUserService(req, res) 

    return res.status(200).json(token)
}