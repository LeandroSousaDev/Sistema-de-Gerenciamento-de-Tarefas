import { Request, Response, Router } from 'express'



const routes = Router()

routes.get('/', async (req: Request, res: Response) => {
    return res.json('tudo certo')
})

export default routes