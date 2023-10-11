import { CreateUser, ReadUser, ReturnUser } from "../interfaces/users.interface";
import { usersRepository } from "../repositories";
import { usersReadSchema, usersReturnSchema } from "../schemas/users.schema";

export const createUserService = async (payload: CreateUser): Promise<ReturnUser> => {

    const newUser = usersRepository.create(payload)

    await usersRepository.save(payload)

    const validatedUser: ReturnUser = usersReturnSchema.parse(newUser)

    return validatedUser
}

export const readUsersService = async (): Promise<ReadUser> => {

    const foundUsers: ReadUser = await usersRepository.find()

    return usersReadSchema.parse(foundUsers)
}