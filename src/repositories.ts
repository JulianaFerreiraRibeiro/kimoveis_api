import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { RepoAddress } from "./interfaces/addresses.interface";
import { RepoCategory } from "./interfaces/categories.interface";
import { RepoRealEstate } from "./interfaces/realEstates.interface";
import { RepoSchedule } from "./interfaces/schedules.interface";
import { RepoUser } from "./interfaces/users.interface";

export const usersRepository: RepoUser = AppDataSource.getRepository(User)
export const categoriesRepository: RepoCategory = AppDataSource.getRepository(Category)
export const schedulesRepository: RepoSchedule = AppDataSource.getRepository(Schedule)
export const realEstatesRepository: RepoRealEstate = AppDataSource.getRepository(RealEstate)
export const addressesRepository: RepoAddress = AppDataSource.getRepository(Address)



