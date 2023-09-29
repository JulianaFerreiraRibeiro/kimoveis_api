import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { RepoRealEstate } from "./interfaces/realEstates.interface";
import { RepoSchedule } from "./interfaces/schedules.interface";
import { RepoUser } from "./interfaces/users.interface";

export const usersRepository: RepoUser = AppDataSource.getRepository(User)
export const categoriesRepository = AppDataSource.getRepository(Category)
export const schedulesRepository: RepoSchedule = AppDataSource.getRepository(Schedule)
export const realEstatesRepository: RepoRealEstate = AppDataSource.getRepository(RealEstate)
export const addressesRepository = AppDataSource.getRepository(Address)



