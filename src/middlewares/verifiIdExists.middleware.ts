import { Movie } from "../entities";
import { AppError } from "../errors";
import { MovieRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";

const verifyIdExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const movieId: number = Number(req.params.id);
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  const movie: Movie | null = await repo.findOne({
    where: { id: movieId },
  });

  if (!movie) {
    throw new AppError("Movie not found", 404);
  }

  res.locals = {
    ...res.locals,
    movie,
  };
  return next();
};

export default verifyIdExists;
