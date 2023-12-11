
const express = require('express');
const router = express.Router();
const {utelizadores } = require('./sequelize');

// Rota para criar utelizadores
router.post('/utelizadores', async (req, res) => {
  try {
    const novoUtelizador = await User.create(req.body);
    res.status(201).json(novoUtelizador);
  } catch (error) {
    res.status(400).json({ messagem: error.messagem });
  }
});

// Rota para obter todos os utelizadores
router.get('/Utelizadores', async (req, res) => {
  try {
    const utelizadores = await User.findAll();
    res.json(utelizadores);
  } catch (error) {
    res.status(500).json({ messagem: error.messagem });
  }
});

// Rota para obter utelizadores por ID
router.get('/utelizadores/:id', async (req, res) => {
  const utelizadoresId = req.params.id;

  try {
    const user = await User.findByPk(utelizadoresId);
    if (!utelizadores) {  //caso contrario
      return res.status(404).json({ messagem: 'Utelizador não encontrado' });
    }
    res.json(utelizadores);
  } catch (error) {
    res.status(500).json({ messagem: error.messagem });
  }
});

// Rota para atualizar um usuário existente por ID
router.put('/utelizadores/:id', async (req, res) => {
  const utelizadoresId = req.params.id;

  try {
    const [atualizar] = await User.update(req.body, {
      where: { id: utelizadoresId }
    });
    if (!atualizar) {
      return res.status(404).json({ messagem: 'Utelizador não encontrado' });
    }
    const atualizarUser = await User.findByPk(userId);
    res.json(atualizarUser);
  } catch (error) {
    res.status(500).json({ messagem: error.messagem });
  }
});

// Rota para remover um usuário por ID
router.delete('/utelizadores/:id', async (req, res) => {
  const utelizadoresId = req.params.id;

  try {
    const deleted = await User.destroy({
      where: { id: utelizadoresId }
    });
    if (!deleted) {   //caso for contrario
      return res.status(404).json({ messagem: 'Utelizador não encontrado' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ messagem: error.messagem });
  }
});

module.exports = router;


//Nao implementei os middlewares
//Nem fiz o grupo 2