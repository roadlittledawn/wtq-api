const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_DSN } = process.env;

const connection = mongoose.createConnection(MONGO_DSN, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
