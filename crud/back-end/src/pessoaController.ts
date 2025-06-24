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
    const sql = `EXEC adicionar_pessoa '${newPessoa.cpf}', '${newPessoa.nome_pessoa}', '${newPessoa.data_nascimento}', '${newPessoa.sexo}' , '${newPessoa.email}', '${newPessoa.telefone}', '${newPessoa.rua}', ${newPessoa.numero}, '${newPessoa.bairro}', '${newPessoa.cidade}', '${newPessoa.estado}', '${newPessoa.cep}'`
    const resul: number = await prisma.$executeRawUnsafe(sql)
    res.status(201).send({
        Resultado: resul,
        Pessoa_criada: newPessoa
    })
    } catch(err){
        res.status(500).send({
            Error: err
        })
    }
}

async function putPessoas(req: Request, res: Response) {
    try {
        const {cd_pessoa} = req.params;
        const updatedPessoa: pessoas = req.body as pessoas; 
        const pessoaExistente = await prisma.pessoas.findUnique({
            where: { 
                cd_pessoa: parseInt(cd_pessoa) 
            }
        });
        if (!pessoaExistente) {
            res.status(404).json({ error: "Pessoa não encontrada" });
            return
        }

        await prisma.pessoas.update({
            where: { cd_pessoa: parseInt(cd_pessoa) },
            data: {
                ...updatedPessoa
            }
        });
        res.status(204).json({ message: "Pessoa atualizada com sucesso" });
    } catch (err) {
        res.status(500).json({ 
            error: err
        });
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
        const sql = `EXEC excluir_pessoa ${cd_pessoa}`
        await prisma.$executeRawUnsafe(sql)
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
    putPessoas,
    deletePessoa
};