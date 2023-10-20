import { z } from "zod";
import { sessionSchema } from "../schemas/session.schema";

type CreateSession = z.infer<typeof sessionSchema>
type ReturnSession = {token: string}

export { CreateSession, ReturnSession }
