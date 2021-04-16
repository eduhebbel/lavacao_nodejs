const express = require('express');
const cors = require ('cors');


const app = express () ;
const port = 5000;
const usuariosRouter = require ('./routes/users');

app.use (cors());
app.use(express.json());
app.use ('/users' , usuariosRouter);

app.listen (port, () => {
    console.log ('SERVIDOR ESTÁ RODANDO NA PORTA: ${port}');

});



