import { Request, Response } from 'express'
import { subTaskRepository } from '../repositories/subTaskRepository'
import { taskRepository } from '../repositories/taskRepository'
import { Conflict } from '../helpers/api-error'

export class AddSubTask {
    async store(req: Request, res: Response) {
        const { subTask, id } = req.body

        const task = await taskRepository.findOne({ where: { id } })

        if (!task) {
            throw new Conflict('Essa tarefa não existe')
        }

        const newSubTask = subTaskRepository.create({ subTask, task: id })
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