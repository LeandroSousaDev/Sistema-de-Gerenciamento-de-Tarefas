import 'dotenv/config'
import { NextFunction, Request, Response } from 'express'
import jwt from "jsonwebtoken";
import { userRepository } from '../repositories/userRepository';
import { UnauthorizedError } from '../helpers/api-error';

type JwtPayLoad = {
    id: number
}

export const validationLogin = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers

    if (!authorization) {
        throw new UnauthorizedError('Não autorizado')
    }

    const token = authorization.replace("Bearer ", "").trim()

    const { id } = jwt.verify(token, String(process.env.JWT_SECRET)) as JwtPayLoad

    const loggedUser = await userRepository.findOne({ where: { id } })

    if (!loggedUser) {
        throw new UnauthorizedError('Não autorizado')
    }

    const { password, ...userData } = loggedUser;

    req.user = userData;

    next()
}