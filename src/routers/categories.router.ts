import { Router } from "express";
import { createCategoryController, readCategoriesController, readCategoriesRealEstatesController } from "../controllers/categories.contoller";

export const CategoriesRouter = Router()

CategoriesRouter.post("/", createCategoryController)
CategoriesRouter.get("/", readCategoriesController)
CategoriesRouter.get("/:id/realEstate", readCategoriesRealEstatesController)