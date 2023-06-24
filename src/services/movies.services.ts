import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import {
  CreateMovie,
  UpdateMovie,
  MovieRepo,
  Pagination,
  PaginationParams,
} from "../interfaces";

const create = async (payload: CreateMovie): Promise<Movie> => {
  const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);
  const newMovie: Movie = movieRepository.create(payload);
  await movieRepository.save(newMovie);
  return newMovie;
};

const read = async ({
  page,
  perPage,
  order,
  sort,
  prevPage,
  nextPage,
}: PaginationParams): Promise<Pagination> => {
  const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);
  const [movies, count]: [Movie[], number] = await movieRepository.findAndCount(
    {
      order: { [sort]: order },
      skip: page,
      take: perPage,
    }
  );

  return {
    prevPage: page <= 1 ? null : prevPage,
    nextPage: count - page <= perPage ? null : nextPage,
    count,
    data: movies,
  };
};

const update = async (payload: UpdateMovie, movie: Movie): Promise<Movie> => {
  const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);
  return await movieRepository.save({ ...movie, ...payload });
};

const erase = async (movie: Movie): Promise<void> => {
  const repo: MovieRepo = AppDataSource.getRepository(Movie);
  await repo.remove(movie);
};

export default { create, read, update, erase };
