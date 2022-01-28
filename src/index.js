const app = require("./app");
const db = require("./connections/db");

const { log } = console;

db.on("connected", (conn) => {
  log(`> Successfully connected to db`);
  app();
});

db.on("error", (err) => {
  log(`> Error connecting to db`);
  throw new Error(err);
});
