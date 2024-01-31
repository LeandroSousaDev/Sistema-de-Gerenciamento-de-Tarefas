import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, UpdateUser, loginUser } from './controllers/userController'
import { AddTask, DeatilTask, DeleteTask, UpdateTask } from './controllers/taskController'
import { validationLogin } from './middlewares/validation'
import { AddSubTask, DeleteSubTask } from './controllers/subTaskController'
import { validationUser } from './middlewares/validationUser'

const routes = Router()

routes.post('/loginUser', new loginUser().store)
routes.post('/adUser', new AddUser().store)

routes.use(validationLogin)

routes.get('/loggedUser', new DeatilUser().store)
routes.put('/updateUser/', new UpdateUser().store)
routes.delete('/deleteUser', new DeleteUser().store)

routes.post('/adTask', new AddTask().store)

routes.get('/task/:id', validationUser, new DeatilTask().store)
routes.put('/task/:id', validationUser, new UpdateTask().store)
routes.delete('/task/:id', validationUser, new DeleteTask().store)

routes.post('/addSubTask', new AddSubTask().store)
routes.delete('/subtask/:id', validationUser, new DeleteSubTask().store)

export default routes