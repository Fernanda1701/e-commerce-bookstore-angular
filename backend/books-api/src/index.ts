import express from 'express';

import { router } from './routes';

const server = express();

var cors = require('cors');
server.use(cors({origin: 'http://localhost:4200'}));

server.use(express.json())
server.use(router)

server.listen(5000, () =>{
    console.log('Servidor está rodando na porta 5000: http://localhost:5000/api e http://localhost:5000/livros');
})