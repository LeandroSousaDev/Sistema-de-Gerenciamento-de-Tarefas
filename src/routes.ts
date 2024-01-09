import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, ListAllUser, UpdateUser } from './controllers/UserController'

const routes = Router()

routes.get('/', new ListAllUser().store)

routes.post('/adduser', new AddUser().store)

routes.get('/:id', new DeatilUser().store)

routes.put('/:id', new UpdateUser().store)

routes.delete('/:id', new DeleteUser().store)




export default routes