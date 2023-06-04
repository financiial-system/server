import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { ILoginSchema } from '../interfaces/login'

export const LoginSchema: SchemaOf<ILoginSchema> = yup.object().shape({
    email: yup.string().email().required(),
	password: yup.string().required()
})