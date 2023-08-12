const mongoose = require("mongoose");

const Schema = new mongoose.Schema({}, {strict:false})

const Model = mongoose.model("article", Schema)

module.exports= Model;