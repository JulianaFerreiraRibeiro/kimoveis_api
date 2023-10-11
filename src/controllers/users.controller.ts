import { Request, Response } from "express";
import { ReadUser, ReturnUser, UpdateUser } from "../interfaces/users.interface";
import { createUserService, deleteUserService, readUsersService, updateUserService } from "../services/users.services";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {

    const newUser: ReturnUser = await createUserService(req.body)

    return res.status(201).json(newUser)
}

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {

    const users: ReadUser = await readUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {

    const id = Number(req.params.id)
    const updatedUser: UpdateUser = await updateUserService(id, req.body)

    return res.status(200).json(updatedUser)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {

    const id = Number(req.params.id)
    await deleteUserService(id)

    return res.status(204).json()
}