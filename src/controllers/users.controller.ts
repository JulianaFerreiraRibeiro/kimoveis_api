import { Request, Response } from "express";

export const createUserController = (req: Request, res: Response): Response => {

    return res.status(201).json()
}

export const readUserController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}