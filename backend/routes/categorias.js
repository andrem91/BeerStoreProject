module.exports = (app) => {
  app.get('/estilos', (req, res) => {
    var connection = app.config.database();
    var query = app.models.categoriaModel;
    query.getEstilos(connection, (err, result) => {
      if (!err) {
        res.json(result);
      };
    });
  });

  app.get('/origens', (req, res) => {
    var connection = app.config.database();
    var query = app.models.categoriaModel;
    query.getOrigens(connection, (err, result) => {
      if (!err) {
        res.json(result);
      };
    });
  });

  app.get('/marcas', (req, res) => {
    var connection = app.config.database();
    var query = app.models.categoriaModel;
    query.getMarcas(connection, (err, result) => {
      if (!err) {
        res.json(result);
      };
    });
  });
};