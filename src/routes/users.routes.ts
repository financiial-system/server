import { Router } from 'express'
import { createUserController } from '../controllers/users.controllers'

//middleware schema
import { UserSchema } from '../schemas/users.schema'
import validationSchemaMiddleware from '../middlewares/validationSchema.middleware'

const usersRouter = Router()

usersRouter.post('', validationSchemaMiddleware(UserSchema), createUserController)

export default usersRouter