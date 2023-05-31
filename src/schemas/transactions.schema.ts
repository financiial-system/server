import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { ITransactionsSchema } from '../interfaces/transactions'

export const TransactionsSchema: SchemaOf<ITransactionsSchema> = yup.object().shape({
    description: yup.string().required(),
    amount: yup.number().required(),
    type: yup.string().required()
})