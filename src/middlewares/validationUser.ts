import { Conflict } from "../helpers/api-error"
import { taskRepository } from "../repositories/taskRepository"
import { NextFunction, Request, Response } from 'express'


export const validationUser = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params
    const id_user = req.user

    const taskExist = await taskRepository.findOne({ where: { id: Number(id) } })

    if (!taskExist) {
        throw new Conflict('essa tarefa não existe')
    }

    next()
}
