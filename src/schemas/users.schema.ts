import { z } from "zod";

const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45).nonempty(),
    email: z.string().max(45).email().nonempty(),
    password: z.string().max(120).nonempty(),
    admin: z.boolean().default(false),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullish()
})

const usersCreateSchema = usersSchema.omit({id: true, createdAt: true, updatedAt: true, deletedAt: true})
const usersUpdateSchema = usersCreateSchema.omit({admin: true}).partial()
const usersReturnSchema = usersSchema.omit({password: true})
const usersReadSchema = usersReturnSchema.array()

export { usersCreateSchema, usersUpdateSchema, usersReturnSchema, usersReadSchema }