import { User } from "../entities";
import { CreateUser, ReadUser, ReturnUser, UpdateUser } from "../interfaces/users.interface";
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

export const updateUserService = async (id: number, user: User): Promise<UpdateUser> => {

    const foundUser: User | null = await usersRepository.findOneBy({id: id})
    const updatedUser = usersRepository.create({...foundUser, ...user})

    await usersRepository.save(updatedUser)

    const validatedUser: ReturnUser = usersReturnSchema.parse(updatedUser)
    return validatedUser 
}

export const deleteUserService = async (id: number) => {
    
    const foundUser: User | null = await usersRepository.findOneBy({id: id})

    await usersRepository.softRemove(foundUser!)
}