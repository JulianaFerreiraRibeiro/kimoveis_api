import { Request, Response } from "express";
import { ReturnUser } from "../interfaces/users.interface";
import { createUserService } from "../services/users.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const newUser: ReturnUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

export const readUserController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}

export const updateUserController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}

export const deleteUserController = (req: Request, res: Response): Response => {

    return res.status(204).json()
}