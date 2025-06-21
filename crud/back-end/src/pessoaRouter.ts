    import express from "express";
import pessoaController from "./pessoaController";

const router = express.Router();

router.get('/', pessoaController.getPessoas)
router.post('/', pessoaController.postPessoas)
router.delete('/:id', pessoaController.deletePessoa)
export default router