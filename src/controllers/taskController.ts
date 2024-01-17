import { Request, Response } from 'express'
import { taskRepository } from '../repositories/taskRepository'
import { NotFoundError } from '../helpers/api-error'
import { userRepository } from '../repositories/userRepository'

export class AddTask {
    async store(req: Request, res: Response) {
        const { task, deadline, status, user } = req.body

        const id = req.user.id

        const userExit = await userRepository.findOne({ where: { id: id } })

        if (!userExit) {
            throw new NotFoundError('Usuário não existi')
        }

        const newTask = taskRepository.create({ task, deadline, status, user: userExit })
        await taskRepository.save(newTask)

        return res.status(201).json({ task, deadline, status, user_id: id })
    }
}

export class DeatilTask {
    async store(req: Request, res: Response) {
        const { id } = req.params

        const task = await taskRepository.findOne({ where: { id: Number(id) } })

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

        await taskRepository.delete({ id: Number(id) })

        return res.status(200).json('tarefa deletada')
    }
}