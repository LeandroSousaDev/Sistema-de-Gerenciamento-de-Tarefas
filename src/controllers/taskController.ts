import { Request, Response } from 'express'
import { taskRepository } from '../repositories/taskRepository'
import { subTaskRepository } from '../repositories/subTaskRepository'
import { Conflict } from '../helpers/api-error'

export class AddTask {
    async store(req: Request, res: Response) {
        const { task, deadline, status } = req.body

        const id = req.user

        const newTask = taskRepository.create({ task, deadline, status, user: id })
        await taskRepository.save(newTask)

        return res.status(201).json({ task, deadline, status, user_id: id })
    }
}

export class DeatilTask {
    async store(req: Request, res: Response) {
        const { id } = req.params

        const task = await taskRepository.findOne({
            where: { id: Number(id) },
            relations: {
                subTask: true
            }
        })

        return res.status(200).json(task)
    }
}

export class UpdateTask {
    async store(req: Request, res: Response) {
        const { id } = req.params
        const { task, deadline, status, user } = req.body

        await taskRepository.update({ id: Number(id) }, { task, deadline, status, user })

        return res.status(200).json('tarefa atualizada')
    }
}

export class DeleteTask {
    async store(req: Request, res: Response) {
        const { id } = req.params

        await subTaskRepository.delete({ task: { id: Number(id) } })

        await taskRepository.delete({ id: Number(id) })

        return res.status(200).json('tarefa deletada')
    }
}