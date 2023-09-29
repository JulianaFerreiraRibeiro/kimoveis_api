import { z } from "zod";
import { schedulesCreateSchema, schedulesReadSchema } from "../schemas/schedules.schema";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type CreateSchedule = z.infer<typeof schedulesCreateSchema>
type ReadSchedule = z.infer<typeof schedulesReadSchema>
type RepoSchedule = Repository<Schedule>

export { CreateSchedule, ReadSchedule, RepoSchedule }