const Product = require("../models/productModel");
const User = require("../models/userModel");

const getProducts = async () => {
  return await Product.find({});
};

const getProductById = async (pid) => {
  return await Product.find({ _id: pid });
};

const userService = async ({ name, lastName, age, email, password }) => {
  const newUser = new User({
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    password: password,
  });
  return await newUser.save();
};

module.exports = { getProducts, getProductById, userService };

/* 
generar un modelo para el ususario

el usuario debe tener 
name,lastname,age,email,password

crear un servicio userService y crearemos dentro de el la funcionalidad createUser, que reciba un objeto y lo guarde en la DB */
