import jwt from 'jsonwebtoken'
import { IUserToken } from './types'

export const generateAccesstoken = (data: IUserToken) => {
    return jwt.sign(data, process.env.PRIVATE_KEY as string, {expiresIn: '5s'})
}

export const generateRefreshtoken = (data: IUserToken) => {
    return jwt.sign(data, process.env.PRIVATE_KEY as string, {expiresIn: '1d'})
}