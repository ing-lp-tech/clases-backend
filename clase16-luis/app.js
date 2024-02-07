const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const Producto = require("./models/productModel");
const productService = require("./services/productService");
const { isExistentUser } = require("./services/userService");
const { createUser } = require("./services/userService");
const { loginUser } = require("./services/loginUser");
const app = express();

/* const PORT = 4010; */
const PORT = process.env.PORT || 4000;

const dbConfig = require("./db/dbConfig");

app.use(express.static(__dirname + "/public"));
/* app.use(express.json()) */
app.use(express.urlencoded({ extended: true })); //habilito que mi servidor pueda recibir formularios

//Configurar el Motor de plantillas

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

const callProducts = async () => {
  /* const response = await isExistentUser('pepe@gmail.com')
    console.log(response) */
};

callProducts();

app.get("/home", (req, res) => {
  res.json({ ok: true });
});

app.get("/register", (req, res) => {
  res.render("register", {
    fecha: new Date().toLocaleTimeString(),
    error: "credenciales incorrectas",
  });
});

app.get("/login", (req, res) => {
  res.render("login");
});

// Manejar la solicitud POST desde el formulario
/* app.post("/register", (req, res) => {
  const userData = {
    name: req.body.name,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    password: req.body.password,
  };

  createUser(userData);
  res.send("Usuario registrado correctamente");
}); */

app.post("/register", async (req, res) => {
  const { name, lastname, age, email, password } = req.body;
  const newUser = { name, lastname, age, email, password };
  const result = await createUser(newUser);
  console.log(newUser);
  if (result.ok) {
    res.status(200).json({ ok: true, message: "usuario creado" });
  } else {
    res.render("register", { error: result.error });
  }
});

/* app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userEmail = email;
  const userPassword = password;

  res.redirect("/register");
}); */

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const result = await loginUser(email, password);

  if (result.ok) {
    res.json({ message: "Inicio de sesión exitoso", user: result.user });
  } else {
    res.json({ message: "Error en el inicio de sesión", error: result.error });
  }
});

const productRouter = require("./router/productRouter");

app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log("Su aplicacion se escucha en http://localhost:" + PORT);
});
