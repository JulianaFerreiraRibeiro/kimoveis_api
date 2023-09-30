import { z } from "zod";
import { addressesCreateSchema, addressesReadSchema, addressesUpdateSchema } from "../schemas/addresses.schema";
import { Repository } from "typeorm";
import { Address } from "../entities";

type CreateAddress = z.infer<typeof addressesCreateSchema>
type UpdateAddress = z.infer<typeof addressesUpdateSchema>
type ReadAddress = z.infer<typeof addressesReadSchema>
type RepoAddress = Repository<Address>

export { CreateAddress, UpdateAddress, ReadAddress, RepoAddress }