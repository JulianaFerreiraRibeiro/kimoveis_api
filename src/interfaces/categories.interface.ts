import { z } from "zod";
import { categoriesCreateSchema, categoriesReadSchema } from "../schemas/categories.schema";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CreateCategory = z.infer<typeof categoriesCreateSchema>
type ReadCategory = z.infer<typeof categoriesReadSchema>
type RepoCategory = Repository<Category>

export { CreateCategory, ReadCategory, RepoCategory }