import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'

import usersRouter from './routes/users.routes'
import loginRouter from './routes/login.routes'

import handleErrorMiddleware from './middlewares/handleError.middleware'

const app = express()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

app.use('/users', usersRouter)
app.use('/login', loginRouter)
//routes transactions

app.use(handleErrorMiddleware)

export default app
