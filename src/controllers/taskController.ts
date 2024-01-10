import { Request, Response } from 'express'
import { taskRepository } from '../repositories/taskRepository'

export class AddTask {
    async store(req: Request, res: Response) {
        const { task, deadline, status, user } = req.body

        const newTask = taskRepository.create({ task, deadline, status, user })
        await taskRepository.save(newTask)

        return res.status(201).json({ ...newTask })
    }
}