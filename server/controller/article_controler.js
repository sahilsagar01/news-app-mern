const Model = require("../modules/article_module");


const getArticles = async (req, res) => {
  const users = await Model.findOne(
    { category: req.params.category }
  )
    .then((docs, err) => {
      res.send(docs);
    })
    .catch((err) => {
      res.send(err.message);
    });
};


module.exports = { getArticles };
