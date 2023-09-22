import express, { json } from "express";
import { UsersRouter } from "./routers/users.router";

export const app = express();
app.use(json())

app.use("/users", UsersRouter)

export default app 