import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config()


const PORT = process.env.PORT || 3000
const app: Application = express()

app.get('/', (req: Request, res:Response) => {
    res.status(200).send('Express + Typescript server!!!!')
})

app.listen(PORT, () => {
    console.log('server is listening at PORT: ',PORT)
})