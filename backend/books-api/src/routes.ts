import { Router, Request, Response } from "express";

import { CreateBooks } from "./controllers/CreateBooks";

const router = Router();
const createBooks = new CreateBooks();

router.get('/api', (request: Request, response: Response) => {
    return response.json({mensagem: 'Bem vindo a API!'})
})

router.get('/livros', createBooks.handle)

export {router}