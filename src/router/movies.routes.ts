import { Router } from "express";
import middlewares from "../middlewares";
import { moviesControllers } from "../controllers";
import { createMovieSchema, updateMovieSchema } from "../schemas";

const movieRouter = Router();

movieRouter.post(
  "",
  middlewares.validateBody(createMovieSchema),
  middlewares.verifyNameExists,
  moviesControllers.create
);

movieRouter.get("", middlewares.pagination, moviesControllers.read);

movieRouter.patch(
  "/:id",
  middlewares.validateBody(updateMovieSchema),
  middlewares.verifyIdExists,
  middlewares.verifyNameExists,
  moviesControllers.update
);

movieRouter.delete("/:id", middlewares.verifyIdExists, moviesControllers.erase);

export default movieRouter;
