const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    interest: [String]
})

const User = mongoose.model("User", userSchema)

module.exports= User;