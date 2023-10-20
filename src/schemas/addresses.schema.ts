import { z } from "zod";

const addressesSchema = z.object({
    id: z.number().positive(),
    street: z.string().max(45).nonempty(),
    zipCode: z.string().max(8).nonempty(),
    number: z.number(),
    city: z.string().max(20).nonempty(),
    state: z.string().max(2).nonempty()
})

const addressesCreateSchema = addressesSchema.omit({id: true})
const addressesUpdateSchema = addressesCreateSchema.partial()
const addressesReadSchema = addressesSchema.array()

export { addressesSchema, addressesCreateSchema, addressesUpdateSchema, addressesReadSchema }