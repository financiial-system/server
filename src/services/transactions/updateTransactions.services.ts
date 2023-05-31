import AppDataSource from "../../data-source";
import { ITransactionsUpdateRequest } from "../../interfaces/transactions";
import Transactions from "../../entities/transactions.entity";
import AppError from "../../errors/AppError";

export const updateTransactionsService = async ({id,transactionId,description,amount,type}:ITransactionsUpdateRequest):Promise<any> => {
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
    
    let newTransaction = {
        description: description? description : transactions?.description,
        amount: amount? amount : transactions?.amount,
        type: type? type : transactions?.type,
    }
    
    await transactionsRepository.update(transactions!.id, newTransaction)

    return true
}