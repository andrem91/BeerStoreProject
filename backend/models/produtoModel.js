module.exports = () => {
  this.getProdutos = (connnection, callback) => {
    connnection.query(
      "SELECT * FROM descricao_produto inner join produto on descricao_produto.id_descricao_produto = produto.id_descricao_produto inner join marca on produto.id_marca = marca.id_marca inner join estilo on produto.id_estilo = estilo.id_estilo inner join origem on produto.id_origem = origem.id_origem;", callback
    );
  };
  return this;
};