import { Router } from "express";
import middlewares from "../middlewares";
import { moviesControllers } from "../controllers";
import { createMovieSchema, updateMovieSchema} from "../schemas";

const movieRouter = Router();

movieRouter.post("",
middlewares.verifyNameExists,
middlewares.validateBody(createMovieSchema),
moviesControllers.create);

export default movieRouter;