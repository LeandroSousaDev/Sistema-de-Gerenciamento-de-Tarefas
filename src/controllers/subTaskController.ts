import { Request, Response } from 'express'
import { subTaskRepository } from '../repositories/subTaskRepository'
import { taskRepository } from '../repositories/taskRepository'
import { Conflict } from '../helpers/api-error'

export class AddSubTask {
    async store(req: Request, res: Response) {
        const { subTask, task_id } = req.body

        const user_id = req.user

        const task = await taskRepository.findOne({ where: { id: task_id } })

        if (!task) {
            throw new Conflict('Essa tarefa não existe')
        }

        // if (Number(task.user.id) != Number(user_id.id)) {
        //     throw new Conflict('tarefa não corresponde a esse usuario')
        // }

        const newSubTask = subTaskRepository.create({ subTask, task: task_id, user: user_id })
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