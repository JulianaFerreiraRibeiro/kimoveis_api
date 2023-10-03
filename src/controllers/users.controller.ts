import { Request, Response } from "express";

export const createUserController = (req: Request, res: Response): Response => {

    return res.status(201).json()
}