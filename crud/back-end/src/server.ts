router.delete('/pessoas/:id', deletarPessoa);
import express from 'express'
import { Request, Response, NextFunction } from 'express';
import router from './pessoaRouter';
import pessoaRouter from './pessoaRouter';

const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

interface errorType{
        message: string
        status: number
}

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
})

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

app.use('/api', pessoaRouter);


app.listen(3001, () => 'server running on port 3001')

