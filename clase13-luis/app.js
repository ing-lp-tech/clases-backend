const express = require("express");
const hbs = require("hbs");
const users = require("./data");
const { login } = require("./manager/userManager");
const PORT = 9000;
const app = express();

/* Middlewere de cofiguracion de los archivos estaticos */
app.use(express.static(__dirname + "/public"));
console.log(__dirname);
app.use(express.urlencoded({ extended: true })); //habilito que mi servidor pueda admitir formularios

//Configurar el Motor de plantillas
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");
//
app.get("/", (req, res) => {
  let isAuth = true;
  if (isAuth) {
    return res.redirect("/home");
  } else {
    return res.redirect("/login");
  }
});
//
app.get("/login", (req, res) => {
  res.render("login");
});
//
app.get("/home", (req, res) => {
  res.render("home", { nombre: "luis" });
});
//

app.get("/pepe", (req, res) => {
  res.render("pepe", { error: "no estas logueado" });
});
//

/* app.post("/login", (req, res) => {
  const { email, contrasena } = req.body;
  console.log("se envio el formulario");
  res.redirect("/home");
}); */

/* app.post("/login", (req, res) => {
  const { email, contrasena } = req.body;
  const resultadoLogin = login(email, contrasena);

  if (resultadoLogin.ok) {
    res.redirect("/home");
  } else {
    res.render("login", { error: resultadoLogin.error });
  }
}); */

app.post("/login", (req, res) => {
  const { email, contrasena } = req.body;

  const result = login({ email, contrasena });
  if (result.ok) {
    res.redirect("/home");
  } else {
    res.render("login", { error: result.error });
  }
});

app.listen(PORT, () => {
  console.log("el servidor se escucha en http://localhost:" + PORT);
});
