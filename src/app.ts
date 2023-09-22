import express, { json } from "express";
import { UsersRouter } from "./routers/users.router";
import { SessionRouter } from "./routers/session.router";

export const app = express();
app.use(json())

app.use("/users", UsersRouter)
app.use("/login", SessionRouter)

export default app 