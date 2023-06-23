import { Movie } from "../entities";
import { AppError } from "../error";
import { MovieRepo } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Request, Response, NextFunction } from "express";

const verifyNameExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const repo: MovieRepo = AppDataSource.getRepository(Movie);
    const name: string = req.body.name;

    if(!name) next();

    const movieExists: boolean = await repo.exist({ where: {name} });

    if(movieExists){
        console.log("appError");
        throw new AppError("Movie already exists",409);
    } 
        
    
    return next();  
};

export default verifyNameExists;