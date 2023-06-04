import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserSchema } from '../interfaces/users'

export const UserSchema: SchemaOf<IUserSchema> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    avatar: yup.string().url().required(),
	password: yup.string().required()
})