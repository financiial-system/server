import { Request, Response } from "express";
import { ITransactionsUpdateRequest, ITransactionsRequest } from "../interfaces/transactions";
import { createTransactionsService } from "../services/transactions/createTransactions.services";
import { listTransactionsService } from "../services/transactions/listTransactions.services";
import { updateTransactionsService } from "../services/transactions/updateTransactions.services";

export const createTransactionsController = async (req: Request, res: Response) => {
    const { description, amount, type }:ITransactionsRequest = req.body
    const id = req.users.userId
    
    const transactions = await createTransactionsService({description, amount, type, id})
    return res.status(201).send({transactions: transactions})
}

export const listTransactionsController = async (req: Request, res: Response) => {
    const transactions = await listTransactionsService()
    return res.status(200).send({transactions: transactions})
}

export const updateTransactionsController = async (req: Request, res: Response) => {
    const { description, amount, type }:ITransactionsUpdateRequest = req.body
    const id = req.users.userId
    const transactionId = req.params.id

    const transactions = await updateTransactionsService({description, amount, type, id, transactionId})
    return res.status(201).send({transactions: transactions})

}