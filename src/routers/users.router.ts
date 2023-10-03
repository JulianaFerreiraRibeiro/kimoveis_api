import { Router } from "express";
import { createUserController, deleteUserController, readUserController, updateUserController } from "../controllers/users.controller";

export const UsersRouter = Router()

UsersRouter.post("/", createUserController)
UsersRouter.get("/", readUserController)
UsersRouter.patch("/:userId", updateUserController)
UsersRouter.delete("/:userId", deleteUserController)




