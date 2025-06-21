import express from "express";
import pessoaController from "./pessoaController";

const router = express.Router();

router.get('/', pessoaController.getPessoas)
router.post('/', pessoaController.postPessoas)
router.delete('/:cd_pessoa', pessoaController.deletePessoa)
export default router