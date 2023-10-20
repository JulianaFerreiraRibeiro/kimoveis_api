import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstates.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";
import handleBody from './../middlewares/verifyBody/handleBody.middleware';
import { realEstatesCreateSchema } from "../schemas/realEstates.schema";
import handlePermission from "../middlewares/verifyPermission/hanlePermission.middleware";

export const RealEstatesRouter = Router()

RealEstatesRouter.post("/", handleToken, handlePermission, handleBody(realEstatesCreateSchema),createRealEstateController)
RealEstatesRouter.get("/", readRealEstateController)
