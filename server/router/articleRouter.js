const router = require("express").Router();
const { getArticles } = require("../controller/article_controler.js");

router.get("/:category", getArticles);
module.exports = router;

