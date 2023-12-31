import { Router } from "express";
import { createScheduleController, readScheduleRealEstateController } from "../controllers/schedules.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";
import handleBody from "../middlewares/verifyBody/handleBody.middleware";
import { schedulesCreateSchema } from "../schemas/schedules.schema";
import handlePermission from "../middlewares/verifyPermission/hanlePermission.middleware";

export const SchedulesRouter = Router()

SchedulesRouter.post("/", handleToken, handleBody(schedulesCreateSchema),createScheduleController)
SchedulesRouter.get("/realEstate/:id", handleToken, handlePermission, readScheduleRealEstateController)

