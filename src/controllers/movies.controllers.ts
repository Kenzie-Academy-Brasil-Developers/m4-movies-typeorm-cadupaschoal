import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesServices } from "../services";
import { Pagination, UpdateMovie } from "../interfaces";

const create = async (req: Request, res: Response): Promise<Response> => {
  const movie: Movie = await moviesServices.create(req.body);
  return res.status(201).json(movie);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const pagination: Pagination = await moviesServices.read(
    res.locals.pagination
  );

  return res.status(200).json(pagination);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const payload: UpdateMovie = req.body;
  const foundMovie: Movie = res.locals.movie;

  const movie: Movie = await moviesServices.update(payload, foundMovie);

  return res.status(200).json(movie);
};

const erase = async (req: Request, res: Response): Promise<Response> => {
  await moviesServices.erase(res.locals.movie);
  return res.status(204).send();
};

export default { create, read, update, erase };
