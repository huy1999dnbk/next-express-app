import express from 'express'
import { authRoutes } from './authRoutes'
const router = express()
router.use('/auth', authRoutes)
export { router }