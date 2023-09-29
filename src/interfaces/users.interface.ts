import { z } from "zod";
import { usersCreateSchema, usersReadSchema, usersReturnSchema, usersUpdateSchema } from "../schemas/users.schema";
import { Repository } from "typeorm";
import { User } from "../entities";

type CreateUser = z.infer<typeof usersCreateSchema>
type ReturnUser = z.infer<typeof usersReturnSchema>
type UpdateUser = z.infer<typeof usersUpdateSchema>
type ReadUser = z.infer<typeof usersReadSchema>
type RepoUser = Repository<User>

export { CreateUser, ReturnUser, UpdateUser, ReadUser, RepoUser }