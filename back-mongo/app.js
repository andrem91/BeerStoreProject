const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors())
app.use(express.json());

// Model
require('./src/models/Depoimento');
const Depoimento = mongoose.model('depoimentos');

//Conexão database
require('./src/database/connect');

app.get('/depoimentos', async (req, res) => {
  const depoimentosResponse = await Depoimento.find();
  const depoimentosJson = await depoimentosResponse;

  return res.json(depoimentosJson);
});

app.post('/depoimentos/cadastrar', (req, res) => {
  const novoDepoimento = new Depoimento({
    cliente: req.body.cliente,
    email: req.body.email,
    telefone: req.body.telefone,
    mensagem: req.body.mensagem
  });

  novoDepoimento.save();
});

app.listen(5001);