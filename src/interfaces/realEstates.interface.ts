import { z } from "zod";
import { realEstatesCreateSchema, realEstatesReadSchema, realEstatesUpdateSchema } from "../schemas/realEstates.schema";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type CreateRealEstate = z.infer<typeof realEstatesCreateSchema>
type UpdateRealEstate = z.infer<typeof realEstatesUpdateSchema>
type ReadRealEstate = z.infer<typeof realEstatesReadSchema>
type RepoRealEstate = Repository<RealEstate>

export { CreateRealEstate, UpdateRealEstate, ReadRealEstate, RepoRealEstate }