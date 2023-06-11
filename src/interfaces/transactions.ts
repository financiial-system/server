export interface ITransactionsRequest {
    id: string,
    description: string,
    amount: number,
    type: string
}

export interface ITransactionsUpdateRequest {
    id: string,
    transactionId: string,
    description: string,
    amount: number,
    type: string
}

export interface ITransactionsSchema {
    description: string,
    amount: number,
    type: string
}


export interface ITransactionsDeleteRequest {
    id: string,
    transactionId: string,
}