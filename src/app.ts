import 'reflect-metadata';
import 'express-async-errors';import express, { json } from "express";
import { UsersRouter } from "./routers/users.router";
import { SessionRouter } from "./routers/session.router";
import { SchedulesRouter } from "./routers/schedules.router";
import { CategoriesRouter } from "./routers/categories.router";
import { RealEstatesRouter } from "./routers/realEstates.router";
import handleErrors from "./middlewares/verifyErrors/handleError.middleware";

export const app = express();
app.use(json())

app.use("/users", UsersRouter)
app.use("/login", SessionRouter)
app.use("/schedules", SchedulesRouter)
app.use("/categories", CategoriesRouter)
app.use("/realEstates", RealEstatesRouter)

app.use(handleErrors)

export default app 