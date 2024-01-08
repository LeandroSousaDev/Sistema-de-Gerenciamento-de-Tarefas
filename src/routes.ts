import { Router } from 'express'
import { TesteController, UserController } from './controllers/UserController'

const routes = Router()

routes.get('/', new TesteController().store)

routes.post('/adduser', new UserController().store)

export default routes