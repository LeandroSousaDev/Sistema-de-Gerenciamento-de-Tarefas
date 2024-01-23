import { Request, Response } from 'express'
import { subTaskRepository } from '../repositories/subTaskRepository'

export class AddSubTask {
    async store(req: Request, res: Response) {
        const { subTask, task } = req.body

        const newSubTask = subTaskRepository.create({ subTask, task })
        await subTaskRepository.save(newSubTask)

        return res.status(201).json(newSubTask)
    }
}

export class DeleteSubTask {
    async store(req: Request, res: Response) {
        const { id } = req.params

        await subTaskRepository.delete({ id: Number(id) })

        return res.status(200).json('sub tarefa deletada')
    }
}