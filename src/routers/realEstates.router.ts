import { Router } from "express";
import { createRealEstateController, readRealEstateController } from "../controllers/realEstates.controller";

export const RealEstatesRouter = Router()

RealEstatesRouter.post("/", createRealEstateController)
RealEstatesRouter.get("/", readRealEstateController)
