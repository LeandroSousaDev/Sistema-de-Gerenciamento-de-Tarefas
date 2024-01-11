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

export class listAllTask {
    async store(req: Request, res: Response) {
        const tasks = await taskRepository.find()
        return res.status(200).json(tasks)
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