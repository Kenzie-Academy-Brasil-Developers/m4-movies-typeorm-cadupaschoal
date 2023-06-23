import { Request, Response } from "express";
import { Movie } from "../entities";
import { moviesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const movie: Movie = await moviesServices.create(req.body);
    return res.status(201).json(movie);
};

export default { create };