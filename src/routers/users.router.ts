import { Router } from "express";
import { createUserController, deleteUserController, readUserController, updateUserController } from "../controllers/users.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";
import handleBody from "../middlewares/verifyBody/handleBody.middleware";
import { usersCreateSchema, usersUpdateSchema } from "../schemas/users.schema";
import handlePermission from "../middlewares/verifyPermission/hanlePermission.middleware";
import handleEmail from "../middlewares/verifyUserEmail/handleEmail.middleware";
import handleUserId from "../middlewares/verifyUserId/handleUserId.middleware";

export const UsersRouter = Router()

UsersRouter.post("/", handleBody(usersCreateSchema), handleEmail,
createUserController)
UsersRouter.get("/", handleToken, handlePermission, readUserController)
UsersRouter.patch("/:userId", handleBody(usersUpdateSchema), handleToken, handleUserId, handleEmail,updateUserController)
UsersRouter.delete("/:userId", handleToken, handlePermission, deleteUserController)




