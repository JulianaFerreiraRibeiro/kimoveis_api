import { Router } from "express";
import { createUserController, deleteUserController, readUserController, updateUserController } from "../controllers/users.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";

export const UsersRouter = Router()

UsersRouter.post("/", createUserController)
UsersRouter.get("/", handleToken, readUserController)
UsersRouter.patch("/:userId", handleToken, updateUserController)
UsersRouter.delete("/:userId", handleToken, deleteUserController)




