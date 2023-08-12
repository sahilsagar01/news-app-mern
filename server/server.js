require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { param } = require("./router/userRouter");

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5002;

const connectToMogodb = async (param) => {
  try {
    await mongoose.connect(
      process.env.DB
    );
  } catch (err) {
    console.log(err);
  }
};
connectToMogodb();

app.use("/", require("./router/userRouter"));
app.use("/article", require("./router/articleRouter"));

app.listen(PORT, function () {
  console.log(`server is running on port ${PORT}`);
});
