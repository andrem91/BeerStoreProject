const express = require('express');
const cors = require('cors');
const mysql = require('mysql');

const server = express();
server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beerstore'
});

server.get('/api/produtos', (req, res) => {
  connection.query(
    "SELECT * FROM descricao_produto inner join produto on descricao_produto.id_descricao_produto = produto.id_descricao_produto inner join marca on produto.id_marca = marca.id_marca inner join estilo on produto.id_estilo = estilo.id_estilo inner join origem on produto.id_origem = origem.id_origem;",
    (error, results, fields) => {
      if (!error) {
        res.json(results);
      } else {
        console.log('Erro ao realizar a consulta com o Banco de dados')
      }
    });
});

server.get('/api/estilos', (req, res) => {
  connection.query(
    "select * from estilo;",
    (error, results, fields) => {
      if (!error) {
        res.json(results);
      } else {
        console.log('Erro ao realizar a consulta com o Banco de dados')
      }
    }
  );
});
server.get('/api/origens', (req, res) => {
  connection.query(
    "select * from origem;",
    (error, results, fields) => {
      if (!error) {
        res.json(results);
      } else {
        console.log('Erro ao realizar a consulta com o Banco de dados')
      }
    }
  );
});
server.get('/api/marcas', (req, res) => {
  connection.query(
    "select * from marca;",
    (error, results, fields) => {
      if (!error) {
        res.json(results);
      } else {
        console.log('Erro ao realizar a consulta com o Banco de dados')
      }
    }
  );
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`Server at http://localhost:${port}`)
});