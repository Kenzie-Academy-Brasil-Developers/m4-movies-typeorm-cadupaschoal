import z from "zod";
import { Movie } from "../entities";
import { DeepPartial, Repository } from "typeorm";
import { createMovieSchema } from "../schemas";

interface CreateMovie {
    name: string,
    description: string,
    duration: number,
    price: number
}
type ReadMovie = Movie[];
type UpdateMovie = DeepPartial<CreateMovie>;
type MovieRepo = Repository<Movie>;

export { CreateMovie, ReadMovie, UpdateMovie, MovieRepo };


