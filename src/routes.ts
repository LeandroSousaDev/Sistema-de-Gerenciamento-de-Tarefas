import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, ListAllUser, UpdateUser, loginUser } from './controllers/UserController'
import { AddTask, DeatilTask, DeleteTask, UpdateTask, listAllTask } from './controllers/taskController'
import { validationLogin } from './middlewares/validation'

const routes = Router()

routes.post('/loginUser', new loginUser().store)
routes.post('/adUser', new AddUser().store)

routes.use(validationLogin)

routes.get('/users', new ListAllUser().store)
routes.get('/user/:id', new DeatilUser().store)
routes.put('/user/:id', new UpdateUser().store)
routes.delete('/user/:id', new DeleteUser().store)

routes.get('/tasks', new listAllTask().store)
routes.post('/adTask', new AddTask().store)
routes.get('/task/:id', new DeatilTask().store)
routes.put('/task/:id', new UpdateTask().store)
routes.delete('/task/:id', new DeleteTask().store)

export default routes