import { Router } from "express";
import { createCategoryController, readCategoriesController, readCategoriesRealEstatesController } from "../controllers/categories.contoller";
import handleToken from "../middlewares/verifyToken/handleToken.middleware";
import handleBody from './../middlewares/verifyBody/handleBody.middleware';
import { categoriesCreateSchema } from "../schemas/categories.schema";
import handlePermission from "../middlewares/verifyPermission/hanlePermission.middleware";
import handleCategoryName from './../middlewares/verifyCategoryName/handleCategoryName.middleware';

export const CategoriesRouter = Router()

CategoriesRouter.post("/", handleBody(categoriesCreateSchema), handleToken,
handlePermission, handleCategoryName, createCategoryController)
CategoriesRouter.get("/", readCategoriesController)
CategoriesRouter.get("/:id/realEstate", readCategoriesRealEstatesController)