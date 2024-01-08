import { Router } from 'express'
import { AddUser, DeatilUser, ListAllUser, UpdateUser } from './controllers/UserController'

const routes = Router()

routes.get('/', new ListAllUser().store)

routes.post('/adduser', new AddUser().store)

routes.get('/:id', new DeatilUser().store)

routes.put('/:id', new UpdateUser().store)

export default routes