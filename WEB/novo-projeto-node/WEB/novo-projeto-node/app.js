
const express = require('express');
const app = express();
const routes = require('./rotas');

app.use(express.json()); 

app.use('/api', rotas); // Usar as rotas definidas em rotas.js

const PORT = 3000; 
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta {3000}`);
});
