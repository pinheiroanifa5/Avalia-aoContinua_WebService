const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json());

app.use('/api', rotas);

const PORT = 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta {3000}`);
});
