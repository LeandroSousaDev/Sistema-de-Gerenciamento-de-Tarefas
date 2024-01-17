import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, UpdateUser, loginUser } from './controllers/UserController'
import { AddTask, DeatilTask, DeleteTask, UpdateTask } from './controllers/taskController'
import { validationLogin } from './middlewares/validation'

const routes = Router()

routes.post('/loginUser', new loginUser().store)
routes.post('/adUser', new AddUser().store)

routes.use(validationLogin)

routes.get('/loggedUser', new DeatilUser().store)
routes.put('/updateUser/', new UpdateUser().store)
routes.delete('/deleteUser', new DeleteUser().store)

routes.post('/adTask', new AddTask().store)
routes.get('/task/:id', new DeatilTask().store)
routes.put('/task/:id', new UpdateTask().store)
routes.delete('/task/:id', new DeleteTask().store)

export default routes