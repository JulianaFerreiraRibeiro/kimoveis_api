import { Router } from "express";
import { createCategoryController, readCategoriesController, readCategoriesRealEstatesController } from "../controllers/categories.contoller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";

export const CategoriesRouter = Router()

CategoriesRouter.post("/", handleToken, createCategoryController)
CategoriesRouter.get("/", readCategoriesController)
CategoriesRouter.get("/:id/realEstate", readCategoriesRealEstatesController)