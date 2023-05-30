import { Request, Response } from 'express'
import { instanceToPlain } from 'class-transformer'

import { createUserService } from '../services/users/createUsers.services'

import { IUserRequest } from '../interfaces/users'

export const createUserController = async (req: Request, res: Response) => {
    const { name, avatar, email, password }: IUserRequest = req.body
    
    const users = await createUserService({name, avatar,email,password}) 
    return res.status(201).send(instanceToPlain({users: users}))
}