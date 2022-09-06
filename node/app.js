import express from 'express';
import cors from 'cors';
import db from './database/db.js'

import fiscalRouter from './routes/fiscal.js';
import legisRouter from './routes/legis.js';
import './database/asociations.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rutas 
app.use('/fiscal', fiscalRouter);
app.use('/legis', legisRouter);

try{
    await db.sync({force:false});
    console.log('conectado ao base de dados');
}
catch(err){
    console.log('erro ao conectar ao base de datos',err);
}

app.get('/', (req, res) => {
    res.send('Hello World');
}
);

app.listen(8080,() => {
    console.log('Servidor rodando na porta 8080')
    })
