import { Request, Response } from 'express'
import { userRepository } from '../repositories/userRepository'
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import { Conflict } from '../helpers/api-error';

export class loginUser {
    async store(req: Request, res: Response) {
        const { email, password } = req.body

        const user = await userRepository.findOne({ where: { email: email } })

        if (!user) {
            return res.status(404).json({ mensagem: "Usuário não encontrado" });
        }

        const validPassword = await bcrypt.compare(password, user.password)

        if (!validPassword) {
            return res.status(400).json({ mensagem: "Senha inválida" });
        }

        const token = jwt.sign({ id: user.id }, String(process.env.JWT_SECRET), { expiresIn: "8h" })

        const { password: use_password, ...userLogged } = user;

        return res.status(200).json({ ...userLogged, token });
    }
}
export class AddUser {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const user = await userRepository.findOne({ where: { email: email } })

        if (user) {
            throw new Conflict('Usuário Ja esta cadastrado')
        }

        const passwordBcrypt = await bcrypt.hash(password, 10);

        const newUserbcrypt = {
            name,
            email,
            password: passwordBcrypt
        };

        const newUser = userRepository.create(newUserbcrypt)
        await userRepository.save(newUser)

        return res.status(201).json({ ...newUserbcrypt })
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

        type User = {
            password: string
        }

        const id = req.user.id

        const user = await userRepository.findOne({
            where: { id: Number(id) },
            relations: {
                tasks: true
            }
        })

        const { password, ...data } = user as User

        return res.status(200).json(data)
    }
}

export class UpdateUser {
    async store(req: Request, res: Response) {
        const { name, email, password } = req.body

        const id = req.user.id

        const passwordBcrypt = await bcrypt.hash(password, 10);

        const updateUser = {
            name,
            email,
            password: passwordBcrypt
        };

        await userRepository.update({ id: Number(id) }, updateUser)

        return res.status(200).json('usuario atualizado')
    }
}

export class DeleteUser {
    async store(req: Request, res: Response) {

        const id = req.user.id

        await userRepository.delete({ id: Number(id) })

        return res.status(200).json('usuario deletado')
    }
}