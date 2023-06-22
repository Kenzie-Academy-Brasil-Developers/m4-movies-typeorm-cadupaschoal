import { z } from "zod";

const movieSchema = z.object({
    id: z.number().positive(),
    name:z.string().max(50),
    description: z.string().nullable(),
    duration: z.number(),
    price: z.number()
});

const createMovieSchema = movieSchema.omit({id: true});
const updateMovieSchema = createMovieSchema.partial();

export{ movieSchema, createMovieSchema, updateMovieSchema };
