import { Request, Response } from "express";
import { ReadUser, ReturnUser } from "../interfaces/users.interface";
import { createUserService, readUsersService } from "../services/users.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const newUser: ReturnUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users: ReadUser = await readUsersService()

    return res.status(200).json(users)
}

export const updateUserController = (req: Request, res: Response): Response => {

    return res.status(200).json()
}

export const deleteUserController = (req: Request, res: Response): Response => {

    return res.status(204).json()
}