import AppDataSource from "../../data-source";
import { ITransactionsRequest } from "../../interfaces/transactions";
import Users from "../../entities/users.entity";
import Transactions from "../../entities/transactions.entity";
import AppError from "../../errors/AppError";

export const createTransactionsService = async ({description,amount,type,id}:ITransactionsRequest):Promise<Transactions> => {
    const usersRepository = AppDataSource.getRepository(Users)
    const user = await usersRepository.findOne({
        where: {
            id: id
        }
    })


    if(!user){
        throw new AppError('Ivalid user id', 400)
    }
    
    const transactionsRepository = AppDataSource.getRepository(Transactions)
    const transaction = transactionsRepository.create({
        description: description,
        amount: amount,
        type: type,
        user: user!
    })

    await transactionsRepository.save(transaction)

    return transaction
}