import 'dotenv/config'
import 'express-async-errors'
import Express from 'express'
import { errorMiddleware } from './middlewares/errorMiddleware'
import routes from './routes'
import { AppDataSource } from './data-source'

AppDataSource.initialize().then(() => {

    const app = Express()

    app.use(Express.json())
    app.use(routes)


    app.use(errorMiddleware)
    return app.listen(process.env.PORT)

}).catch((error) => {
    console.log(error)
})