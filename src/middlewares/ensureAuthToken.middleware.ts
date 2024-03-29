import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';

const ensureAuthTokenMiddleware = async (req: Request,res: Response,next: NextFunction) => {
   let token = req.headers.authorization

  if (!token){
    throw new AppError('There are not a token',401);
  }

  token = token.split(" ")[1]
  
  jwt.verify(token,process.env.JWT_SECRET as string,(error: any, decoded: any) => {
    if (error) {
      throw new AppError('Invalid token',401);
    }

    req.users = {
      userId: decoded.sub
    };

    next();
    }
  );
};

export default ensureAuthTokenMiddleware;
