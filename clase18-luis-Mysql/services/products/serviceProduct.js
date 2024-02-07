const db = require("../../config/dbConfig");

const createProduct = ({ nombre, precio, stock, descripcion }) => {
  const query =
    "INSERT INTO productos (nombre,precio,stock,descripcion) VALUES(?,?,?,?)";
  db.query(query, [nombre, precio, stock, descripcion], (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log("el producto se creo exitosamente");
      console.log(result);
    }
  });
};

/* createProduct({
    nombre: "teclado logitech",
    precio: 50,
    stock: 30,
    descripcion: "teclado mecanico",
  }); */

const getAllProducts = () => {
  const query = "SELECT * FROM productos";
  db.query(query, (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(result);
    }
  });
};

getAllProducts();

const getProductById = async (pid) => {
  const query = `SELECT * FROM productos WHERE Id = (?)`;

  let response;
  await db.query(query, [pid], (error, result) => {
    if (error) {
      console.error(error);
      response = false;
    } else {
      console.log(result[0]);
      response = result[0];
    }
  });
  return response;
};

const deleteProductById = (pid) => {
  const query = `DELETE FROM productos WHERE Id = (?)`;
  db.query(query, [pid], (error, result) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`El producto fue eliminado exitosamente`);
    }
  });
};

/* getAllProducts(2) */

/* 
TAREA:

NOOOO SE OLVIDEN DE EL WHERE

Hacer la funcion obtener producto por ID

HACER LA FUNCION ELIMINAR POR ID 
*/

module.exports = {
  createProduct,
  getAllProducts,
  deleteProductById,
  getProductById,
};

/* createProduct({nombre: 'teclado logitech', precio: 50, stock: 30, descripcion: 'teclado funcional mecanico'}) */
