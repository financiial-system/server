import AppDataSource from "../../data-source";
import jwt from 'jsonwebtoken'
import Users from "../../entities/users.entity";
import AppError from "../../errors/AppError";
import { compare } from "bcryptjs";
import 'dotenv/config'
import { ILoginRequest } from "../../interfaces/login";

export const createLoginService = async ({email, password}: ILoginRequest):Promise<string> => {
    const userRepository = AppDataSource.getRepository(Users)
    const users = await userRepository.findOne({
        where:{
            email
        }
    })

    if(!users){
        throw new AppError('Invalid Email', 403)
    }

    const matchPassword = await compare(password, users?.password)
    

    if(!matchPassword){
        throw new AppError('Password invalid', 403)
    }

    const token = jwt.sign(
        {},
        process.env.JWT_SECRET as string,
        {
            subject: users.id,
            expiresIn: '1d'
        }
    )

    return token
}