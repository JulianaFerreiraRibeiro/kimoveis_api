import AppError from "../../error";
import { CreateCategory } from "../interfaces/categories.interface";
import { categoriesRepository } from "../repositories";

export const createCategoryService = async (payload: CreateCategory) => {

    return await categoriesRepository.save(payload)
}

export const readCategoriesService = async () => {

    return await categoriesRepository.find()
}

export const readCategoriesRealEstateService = async (id: number) => {

    const foundCategory = await categoriesRepository.findOneBy({id: id})

    if (!foundCategory) throw new AppError("Category not found", 404)

    const foundCategoryRealEstate = await categoriesRepository.findOne({
        where: {
            id: id
        },
        relations: {
            realEstate: true
        }
    })

    return foundCategoryRealEstate
}