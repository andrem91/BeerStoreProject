module.exports = () => {
  this.setDepoimento = (depoimento, connection, callback) => {
    connection.query(
      'INSERT INTO depoimento set ?', depoimento
    );
  };
  this.getDepoimentos = (connection, callback) => {
    connection.query(
      'SELECT * FROM depoimento', callback
    );
  };
  return this;
};