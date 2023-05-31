import Transactions from "../../entities/transactions.entity";
import AppDataSource from "../../data-source";

export const listTransactionsService = async () => {
    const transactionsRepository = AppDataSource.getRepository(Transactions)
    const transactions = await transactionsRepository.find()

    return transactions
}