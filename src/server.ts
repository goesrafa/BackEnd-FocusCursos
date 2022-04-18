import express, {Request, Response, NextFunction} from 'express'
import 'express-async-errors'


import cors from 'cors'
import path from 'path'

import { router } from './routes';


const app = express();
app.use(express.json());

/**Liberação para qualquer ip ter acesso a requisição**/
app.use(cors())

app.use(router)

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'temp'))
)
/**Tratando erros**/
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if(err instanceof Error){
        //Se for uma instancia de Error
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error!!'
    })
})

app.listen(3333, () => console.log('Servidor conectado!'))