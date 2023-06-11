import { Router } from "express";
import { createLoginController } from "../controllers/login.controllers";
import { LoginSchema } from '../schemas/login.schema'
import validationSchemaMiddleware from '../middlewares/validationSchema.middleware'

const loginRouter = Router()
loginRouter.post('', validationSchemaMiddleware(LoginSchema), createLoginController)

export default loginRouter

