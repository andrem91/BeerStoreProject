const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Depoimento = new Schema({
  cliente: {
    type: String
  },
  email: {
    type: String
  },
  telefone: {
    type: String
  },
  mensagem: {
    type: String
  }
});

mongoose.model('depoimentos', Depoimento)