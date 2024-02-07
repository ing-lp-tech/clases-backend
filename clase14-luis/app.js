const express = require("express");
const dbConfig = require("./db/dbConfig");
const Producto = require("./models/productModel");
const ProductService = require("./services/productService");
const { createUser } = require("./services/userService");

const app = express();

const PORT = 4010;

const callProducts = async () => {
  const productSelected = await ProductService.getProductById(
    "655d43586a87257e99116df2"
  );
  console.log(productSelected);
};
callProducts();

createUser("Cosme", "Fulanito", 15, "cosme@gmail.com", "123456");

app.listen(PORT, () => {
  console.log("Su aplicacion se escucha en http://localhost:" + PORT);
});

/* 

Generar un modelo para el usuario
el usuario debe tener: 
name, 
lastname, 
age, 
email, 
password

Crear un servicio que se llame userService y crearemos dentro de el la funcionalidad createUser que reciba un objeto y lo guarde en la DB
Crear la funcion isExistentUser(email) y devuelva true o false dependiendo de si existe el usuario con el email pasado

*/
