import { z } from "zod";

const movieSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(50),
  description: z.string().nullish().default(null),
  duration: z.number().positive(),
  price: z.number().int(),
});

const createMovieSchema = movieSchema.omit({ id: true });
const updateMovieSchema = createMovieSchema.partial();

export { movieSchema, createMovieSchema, updateMovieSchema };
