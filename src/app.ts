import "express-async-errors";
import { movieRouter } from "./router";
import middlewares from "./middlewares";
import express, { Application } from "express";

const app: Application = express();
app.use(express.json());

app.use("/movies", movieRouter);

app.use(middlewares.handleError);

export default app;
