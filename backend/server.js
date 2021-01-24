const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors');
const mysql = require('mysql');

const server = express();
server.use(express.json());
server.use(cors());

server.use(bodyParser.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'beerstore'
});

server.get('/api/produtos', (req, res) => {
  connection.query(
    "SELECT * FROM descricao_produto inner join produto on descricao_produto.id_descricao_produto = produto.id_descricao_produto inner join marca on produto.id_marca = marca.id_marca inner join estilo on produto.id_estilo = estilo.id_estilo inner join origem on produto.id_origem = origem.id_origem;",
    (error, results) => {
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
    (error, results) => {
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
    (error, results) => {
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
    (error, results) => {
      if (!error) {
        res.json(results);
      } else {
        console.log('Erro ao realizar a consulta com o Banco de dados')
      }
    }
  );
});

server.get('/clube', (req, res) => {
  connection.query(
    "SELECT * FROM clube;",
    (error, results) => {
      if(!error) {
        res.json(results);
      } else {
        console.log("erro ao realizar a consulta no Banco de dados");
      }
    }
  );
});

server.post('/clube/cadastrar', (req, res) => {
    const nome_cliente = req.body.nome_cliente
    const endereco = req.body.endereco
    const telefone = req.body.telefone
    const nome_produto = req.body.nome_produto
    const valor_unit = req.body.valor_unit
    const quantidade = req.body.quantidade
    const valor_final = req.body.valor_final
  connection.query('INSERT INTO clube (nome_cliente, endereco, telefone, nome_produto, valor_unit, quantidade, valor_final) VALUES (?,?,?,?,?,?,?)',
    [nome_cliente, endereco, telefone, nome_produto, valor_unit, quantidade, valor_final],
    (error, results) => {
      if(error) {
        console.log(error);
      } else {
        res.send("Valores inseridos");
      }
    }
  );
});

const port = 5000;
server.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});

