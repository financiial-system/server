import AppDataSource from "../../data-source";
import { ITransactionsDeleteRequest } from "../../interfaces/transactions";
import Transactions from "../../entities/transactions.entity";
import AppError from "../../errors/AppError";

export const deleteTransactionsService = async ({id,transactionId}:ITransactionsDeleteRequest) => {
    const transactionsRepository = AppDataSource.getRepository(Transactions)
    const transactions = await transactionsRepository.findOne({
        where: {
            id: transactionId
        },
        relations:{
            user: true
        }
    })

    if(transactions?.user.id !== id){
        throw new AppError('Unauthorized', 401)
    }
    
    await transactionsRepository.delete(transactions!.id)

    return true
}