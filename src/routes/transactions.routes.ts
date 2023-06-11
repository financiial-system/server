import { Router } from "express";
import { createTransactionsController, listTransactionsController, updateTransactionsController, deleteTransactionsController } from "../controllers/transactions.controller";
import { TransactionsSchema } from '../schemas/transactions.schema'
import validationSchemaMiddleware from '../middlewares/validationSchema.middleware'
import ensureAuthTokenMiddleware from '../middlewares/ensureAuthToken.middleware'

const transactionsRouter = Router()
transactionsRouter.post('', ensureAuthTokenMiddleware, validationSchemaMiddleware(TransactionsSchema), createTransactionsController)
transactionsRouter.get('', listTransactionsController)
transactionsRouter.patch('/:id', ensureAuthTokenMiddleware,validationSchemaMiddleware(TransactionsSchema),updateTransactionsController)
transactionsRouter.delete('/:id', ensureAuthTokenMiddleware, deleteTransactionsController)

export default transactionsRouter

