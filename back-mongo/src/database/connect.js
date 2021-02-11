const mongoose = require('mongoose');

function connect() {
  mongoose
    .connect('mongodb://localhost/beerStore', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      console.log("Conectado com o banco de dados beerStore");
    })
    .catch((err) => {
      console.log(`Erro ao conectar ao banco de dados: ${err}`);
    });
};

module.exports = connect();