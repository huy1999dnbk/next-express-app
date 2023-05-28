import { Request, Response } from 'express'
import { prisma } from '../utils/db'
export const signup = async(req: Request, res: Response) => {
    const { username, email, password } = req.body
    const user = await prisma.users.findFirst({
        where: {
            email
        }
    }) 
    if(user) {
        return res.status(400).json({
            msg: 'Email already exists!!! try another email!'
        })
    }
    const userCreated = await prisma.users.create({
        data: {
            username,
            email,
            password
        }
    })
    res.send('sign up here')
}