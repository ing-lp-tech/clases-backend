const mongoose = require("mongoose");

const DB_NAME = "UTN_MJ_NOCHE_NOV";
/* const mongoDB_URL = "mongodb://localhost:27017/" + DB_NAME; */

/* SI no funciona usar en vez de localhost usar 127.0.0.1 */
const mongoDB_URL = "mongodb://127.0.0.1:27017/" + DB_NAME;

mongoose.connect(mongoDB_URL, {});
const db = mongoose.connection;
db.on("error", () => {
  console.log("hubo un error");
});

db.once("open", () => {
  console.log("conexion exitosa con MongoDB");
});

module.exports = mongoose;
