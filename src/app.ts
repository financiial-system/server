import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import cors from 'cors'

//import routes

//import middleware

const app = express()
app.use(express.json())

const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
    optionSuccessStatus: 200
}

app.use(cors(corsOptions))

//routes users
//app.use('/users', usersRouter)

//routes login
//routes transactions

//app.use(handleErrorMiddleware)

export default app
