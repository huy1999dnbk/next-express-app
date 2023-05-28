import express, { Request, Response, Application } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import helmet from 'helmet'
import { router } from './routes/index'
dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(helmet())
app.use(cors({
  credentials: true,
  origin:'http://localhost:3000'
}))

app.use('/api/v1',router)

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Express + Typescript server!!!!')
})
app.listen(PORT, () => {
  console.log('server is listening at PORT: ', PORT)
})
