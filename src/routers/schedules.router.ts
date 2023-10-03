import { Router } from "express";
import { createScheduleController, readScheduleRealEstateController } from "../controllers/schedules.controller";

export const SchedulesRouter = Router()

SchedulesRouter.post("/", createScheduleController)
SchedulesRouter.get("/realEstate/:id", readScheduleRealEstateController)

