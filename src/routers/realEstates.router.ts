import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstates.controller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";

export const RealEstatesRouter = Router()

RealEstatesRouter.post("/", handleToken, createRealEstateController)
RealEstatesRouter.get("/", readRealEstateController)
