const Product = require("../models/productModel");

const getProducts = async () => {
  return await Product.find({});
};

const getProductById = async (pid) => {
  return await Product.find({ _id: pid });
};

module.exports = { getProducts, getProductById };

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
