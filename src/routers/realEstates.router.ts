import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstates.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";
import handleBody from './../middlewares/verifyBody/handleBody.middleware';
import { realEstatesCreateSchema } from "../schemas/realEstates.schema";

export const RealEstatesRouter = Router()

RealEstatesRouter.post("/", handleToken, handleBody(realEstatesCreateSchema),createRealEstateController)
RealEstatesRouter.get("/", readRealEstateController)
