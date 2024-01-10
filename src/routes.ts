import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, ListAllUser, UpdateUser } from './controllers/UserController'
import { AddTask } from './controllers/taskController'

const routes = Router()

routes.get('/users', new ListAllUser().store)
routes.post('/adUser', new AddUser().store)
routes.get('/user/:id', new DeatilUser().store)
routes.put('/user/:id', new UpdateUser().store)
routes.delete('/user/:id', new DeleteUser().store)

routes.get('/tasks',)
routes.post('/adTask', new AddTask().store)
routes.get('/task/:id',)
routes.put('/task/:id',)
routes.delete('/user/:id',)

export default routes