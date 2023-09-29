import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { RepoUser } from "./interfaces/users.interface";

export const usersRepository: RepoUser = AppDataSource.getRepository(User)
export const categoriesRepository = AppDataSource.getRepository(Category)
export const schedulesRepository = AppDataSource.getRepository(Schedule)
export const realEstatesRepository = AppDataSource.getRepository(RealEstate)
export const addressesRepository = AppDataSource.getRepository(Address)



