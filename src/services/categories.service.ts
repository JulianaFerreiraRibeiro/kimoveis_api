import { CreateCategory } from "../interfaces/categories.interface";
import { categoriesRepository } from "../repositories";

export const createCategoryService = async (payload: CreateCategory) => {

    return await categoriesRepository.save(payload)
}