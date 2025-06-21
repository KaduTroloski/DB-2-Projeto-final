import express from 'express'
import { Request, Response, NextFunction } from 'express';
import router from './pessoaRouter';

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

interface errorType{
        message: string
        status: number
}

app.use('/pessoas', router)


app.use((req: Request, res: Response, next: NextFunction) => {
    const erro:errorType = {
        message: 'Route not found',
        status: 404
    }
    next(erro)
})

app.use((erro: errorType, req:Request, res: Response, next: NextFunction) => {
    res.status(erro.status || 500);
    res.send({ error: { message: erro.message }})
})


app.listen(3001, () => 'server running on port 3001')

