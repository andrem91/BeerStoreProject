const mysql = require('mysql');

const connMySQL = () => {
  return connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'beerstore'
  });
}
module.exports = () => {
  return connMySQL;
}