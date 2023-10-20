import { z } from "zod";
import { addressesCreateSchema } from "./addresses.schema";

const realEstatesSchema = z.object({
    id: z.number().positive(),
    value: z.number().or(z.string()),
    size: z.number().positive(),
    sold: z.boolean().default(false),
    address: addressesCreateSchema.required(),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    categoryId: z.number().positive()
})

const realEstatesCreateSchema = realEstatesSchema.omit({id: true, sold: true, createdAt: true, updatedAt: true})
const realEstatesUpdateSchema = realEstatesCreateSchema.partial()
const realEstatesReadSchema = realEstatesSchema.array()

export { realEstatesSchema, realEstatesCreateSchema, realEstatesUpdateSchema, realEstatesReadSchema }