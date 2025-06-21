import { Request, Response } from "express";
import { pessoas,PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function getPessoas(req: Request, res: Response) {
    try{
        const resul: pessoas[] = await prisma.pessoas.findMany()
        res.status(200).send(resul)
    } catch(err){
        res.status(500).send({
            Error: err
        })
    }
}

async function postPessoas(req: Request, res: Response){
    try{
    const newPessoa: pessoas = req.body as pessoas
    const resul: pessoas = await prisma.pessoas.create({
        data: {
            ...newPessoa
        }
    })
    res.status(201).send({
        Pessoa_criada: resul
    })
    } catch(err){
        res.status(500).send({
            Error: err
        })
    }
}

async function deletePessoa(req: Request, res: Response) {
    try {
        const { cd_pessoa } = req.params;
        const pessoaExistente = await prisma.pessoas.findUnique({
            where: { 
                cd_pessoa: parseInt(cd_pessoa) 
            }
        });
        if (!pessoaExistente) {
            res.status(404).json({ error: "Pessoa não encontrada" });
            return
        }

        await prisma.pessoas.delete({
            where: { cd_pessoa: parseInt(cd_pessoa) }
        });
        res.status(204).json({ message: "Pessoa deletada com sucesso" });
    } catch (err) {
        res.status(500).json({ 
            error: err
         });
    }
}

export default {
    getPessoas,
    postPessoas,
    deletePessoa
};