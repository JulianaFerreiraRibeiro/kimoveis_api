import { Router } from "express";

export const UsersRouter = Router()

UsersRouter.post("/")
UsersRouter.get("/")
UsersRouter.patch("/:userId")
UsersRouter.delete("/:userId")




