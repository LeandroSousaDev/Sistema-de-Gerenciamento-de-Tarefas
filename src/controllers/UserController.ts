import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'

export class UserController {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const newUser = userRepository.create({ name, email, password })
        await userRepository.save(newUser)

        return res.status(201).json({ ...newUser })
    }
}

export class TesteController {
    async store(req: Request, res: Response) {
        const users = await userRepository.find()
        return res.status(200).json(users)
    }
}