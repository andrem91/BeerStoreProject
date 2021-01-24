module.exports = () => {
  this.getEstilos = (connection, callback) => {
    connection.query(
      "select * from estilo;", callback
    );
  };

  this.getOrigens = (connection, callback) => {
    connection.query(
      "select * from origem;", callback
    );
  };

  this.getMarcas = (connection, callback) => {
    connection.query(
      "select * from marca;", callback
    );
  };

  return this;
}