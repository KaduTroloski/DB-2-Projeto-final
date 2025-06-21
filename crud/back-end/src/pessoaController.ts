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
    const { id } = req.params;

    try {
        const pessoaExistente = await prisma.pessoas.findUnique({
            where: { id: Number(id) }
        });
        if (!pessoaExistente) {
            return res.status(404).json({ error: "Pessoa não encontrada" });
        }

        await prisma.pessoas.delete({
            where: { id: Number(id) }
        });

        return res.status(200).json({ message: "Pessoa deletada com sucesso" });
    } catch (erro) {
        console.error("Erro ao deletar pessoa:", erro);
        return res.status(500).json({ error: "Erro ao deletar pessoa" });
    }
}

export default {
    getPessoas,
    postPessoas,
    deletePessoa
};