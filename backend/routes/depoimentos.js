module.exports = (app) => {

  app.get('/depoimentos', (req,res) => {
    var connection = app.config.database();
    var query = app.models.depoimentoModel;
    query.getDepoimentos(connection,(err, result) => {
      if (!err) {
        res.json(result);
      };
    });
  });
  
  app.post('/depoimentos/cadastrar', (req,res) => {
    var depoimento = req.body;
    var connection = app.config.database();
    var query = app.models.depoimentoModel;
    query.setDepoimento(depoimento, connection, (err, result) => {
    });
  });
}