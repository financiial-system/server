import { Router } from "express";
import { createTransactionsController } from "../controllers/transactions.controller";
import { TransactionsSchema } from '../schemas/transactions.schema'
import validationSchemaMiddleware from '../middlewares/validationSchema.middleware'

const transactionsRouter = Router()
transactionsRouter.post('', validationSchemaMiddleware(TransactionsSchema), createTransactionsController)

export default transactionsRouter

