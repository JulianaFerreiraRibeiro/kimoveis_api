import { z } from "zod";
import { usersReturnSchema } from "./users.schema";

const schedulesSchema = z.object({
    id: z.number().positive(),
    date: z.string().nonempty(),
    hour: z.string().nonempty(),
    user: usersReturnSchema,
    realEstateId: z.number().positive()
})

const schedulesCreateSchema = schedulesSchema.omit({id: true, user: true})
const schedulesReadSchema = schedulesSchema.array()

export { schedulesSchema, schedulesCreateSchema, schedulesReadSchema }