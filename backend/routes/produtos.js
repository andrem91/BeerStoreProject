module.exports = (app) => {
  app.get('/produtos', (req,res) => {
    var connection = app.config.database();
    var query = app.models.produtoModel;
    query.getProdutos(connection, (err, result) => {
      if (!err) {
        res.json(result);
      };
    });
  });
};