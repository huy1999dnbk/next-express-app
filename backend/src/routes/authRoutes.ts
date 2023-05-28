import express from 'express'
import { signup } from '../controllers/authController'
const authRoutes = express()
authRoutes.use(express)
authRoutes.post('/signup', signup)

export {
    authRoutes
}