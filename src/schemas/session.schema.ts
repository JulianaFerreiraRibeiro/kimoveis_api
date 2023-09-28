import { usersSchema } from "./users.schema";

const sessionSchema = usersSchema.pick({
    email: true,
    password: true
})

export { sessionSchema }