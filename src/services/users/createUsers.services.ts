import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";

import Users from "../../entities/users.entity";

import { IUserRequest } from "../../interfaces/users";

import { hash } from 'bcryptjs'

export const createUserService = async ({name, avatar, email, password}:IUserRequest): Promise<Users> => {
    const userRepository = AppDataSource.getRepository(Users)
    const users = await userRepository.find()

    const emailAlreadyExists:any = users.find(user => user.email === email)

    if(emailAlreadyExists){
        throw new AppError('Email already exists', 400)
    }

    const hashPassword = await hash(password, 10)

    const user = userRepository.create({
        name, avatar, email, password: hashPassword
    })

    await userRepository.save(user)
    return user
}