import { Router } from 'express'
import { AddUser, DeatilUser, DeleteUser, ListAllUser, UpdateUser, loginUser } from './controllers/UserController'
import { AddTask, DeatilTask, DeleteTask, UpdateTask, listAllTask } from './controllers/taskController'
import { validationLogin } from './middlewares/validation'

const routes = Router()

routes.post('/loginUser', new loginUser().store)
routes.post('/adUser', new AddUser().store)
// adiciona verificação de email ja estacadas trado

routes.use(validationLogin)

routes.get('/loggedUser', new DeatilUser().store)
routes.put('/user/:id', new UpdateUser().store)
//deixa a atualização dinamica
//adiciona o bcrypt no email
routes.delete('/user/:id', new DeleteUser().store)

routes.post('/adTask', new AddTask().store)
//adiciona verificação id de usuaruio existi
//adiciciona req para id do usuario
routes.get('/task/:id', new DeatilTask().store)
routes.put('/task/:id', new UpdateTask().store)
routes.delete('/task/:id', new DeleteTask().store)

export default routes