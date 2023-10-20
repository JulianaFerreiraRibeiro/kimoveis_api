import { Repository } from "typeorm";
import { Category } from "../../../entities";
import { AppDataSource } from "../../../data-source";

type iCategoryRepo = Repository<Category>

const manyCategories = async (): Promise<any> => {

    const categoryRepo: iCategoryRepo = AppDataSource.getRepository(Category)

    const categoryTotal: number = 5

    const manyCategories = Array.from(Array(categoryTotal)).map((val, index) => {
        return {
            id: expect.any(Number),
            name: `category ${index}`

        }
    })

    await categoryRepo.createQueryBuilder()
    .insert()
    .values(manyCategories.map(({id, ...val}) => val))

    return manyCategories
}

export default {
    manyCategories
}