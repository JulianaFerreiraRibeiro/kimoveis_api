import { Router } from "express";
import { createScheduleController, readScheduleRealEstateController } from "../controllers/schedules.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";

export const SchedulesRouter = Router()

SchedulesRouter.post("/", handleToken, createScheduleController)
SchedulesRouter.get("/realEstate/:id", handleToken, readScheduleRealEstateController)

