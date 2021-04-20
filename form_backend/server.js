const express = require ('express');
const cors = require('cors');

const app = express();
const port = 5000;
const hostname = '3.84.238.203';
const usuariosRouter = require('./routes/usuarios');

app.use(cors());
app.use(express.json());
app.use('/usuarios', usuariosRouter);

app.listen(port, () => {
	console.log(`Servidor rodando no ip ${hostname} na porta: ${port}`);
});
