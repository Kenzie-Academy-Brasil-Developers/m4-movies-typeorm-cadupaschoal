import { z } from "zod";
import { AppError } from "../error";
import { Request, Response, NextFunction} from "express";
const handleError = (error: unknown, req: Request, res: Response, next: NextFunction): Response => {
    if ( error instanceof AppError){
        return res.status(error.status).json({ error: error.message });
    };
    
    if (error instanceof z.ZodError){
        return res.status(400).json({ message: error.errors });
    };

    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
};

export default handleError;