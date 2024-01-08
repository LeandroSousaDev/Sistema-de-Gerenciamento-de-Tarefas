import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'

export class AddUser {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const newUser = userRepository.create({ name, email, password })
        await userRepository.save(newUser)

        return res.status(201).json({ ...newUser })
    }
}

export class ListAllUser {
    async store(req: Request, res: Response) {
        const users = await userRepository.find()
        return res.status(200).json(users)
    }
}

export class DeatilUser {
    async store(req: Request, res: Response) {
        const { id } = req.params

        const user = await userRepository.findOne({ where: { id: Number(id) } })

        return res.status(200).json(user)
    }
}