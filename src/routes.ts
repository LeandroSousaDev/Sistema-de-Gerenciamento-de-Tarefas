import { Router } from 'express'
import { AddUser, DeatilUser, ListAllUser } from './controllers/UserController'

const routes = Router()

routes.get('/', new ListAllUser().store)

routes.post('/adduser', new AddUser().store)

routes.get('/:id', new DeatilUser().store)

export default routes