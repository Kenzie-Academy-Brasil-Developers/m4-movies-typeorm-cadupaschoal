import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { CreateMovie, ReadMovie, MovieRepo} from "../interfaces";

const create = async ( payload: CreateMovie): Promise<Movie> => {
    const movieRepository: MovieRepo = AppDataSource.getRepository(Movie);
    const newMovie: Movie = movieRepository.create(payload);
    await movieRepository.save(newMovie);
    return newMovie;
};

export default { create };