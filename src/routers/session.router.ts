import { Router } from "express";
import { sessionUserController } from "../controllers/session.controller";

export const SessionRouter = Router()

SessionRouter.post("/", sessionUserController)