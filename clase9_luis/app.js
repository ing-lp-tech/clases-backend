const filesystem = require("fs");

//arranco en la terminar el codigo con : npm init -y   , npm i -D nodemon
///corro el codigo con node app en la terminal

/* filesystem.promises.writeFile('text.txt', 'hola', 'utf-8') */

/* filesystem.promises.readFile('text.txt', 'utf-8')
.then(result => console.log(result))
 */
/* 

*/

/* Hacer una funcion que se llame leer txt que nos lea el txt por consola SIN USAR THEN */

/* const leerTxt = async () => {
  let result = await filesystem.promises.readFile("text.txt", "utf-8");
  console.log(result);
};

leerTxt(); */

/* 
DECODIFICADOR

Tenemos dos archivos en nuestro programa, uno se llama input.txt y el otro output.txt

El txt en input es un texto con algunas imperfecciones

POR EJEMPLO

%20 = ' '
XeX = a
$palabraClave = hola

input.txt
$palabraClave%20como%20estXeX%20buen%20diXeX

output.txt
hola como estas buen dia

Crear un programa que lea el input.txt y genere/escriba en output.txt el texto decodificado

*/

/* const decodificador = async (inputFile) => {
  let text = await filesystem.promises.readFile(inputFile, "utf-8");
  text = text
    .replaceAll("%20", " ")
    .replaceAll("XeX", "a")
    .replaceAll("$palabraClave", "hola");
  filesystem.promises.writeFile("output.txt", text, "utf-8");
};

decodificador("text.txt");

filesystem.promises.writeFile(
  "product.json",
  JSON.stringify({ data: "pepe" }),
  "utf-8"
); */

/* 

Crea un array que se llame productos que empieze como array vacio

 

Crea una funcion que se llame crearProducto:

Recibe un producto y lo guarda en el array productos y luego lo guarda en products.json (al array de productos)

*/

const productos = [];

const crearProducto = async (producto) => {
  const data = await filesystem.promises.readFile("products.json", "utf-8");
  const productosJSON = JSON.parse(data);

  productosJSON.push(producto);

  filesystem.promises.writeFile(
    "products.json",
    JSON.stringify(productosJSON),
    "utf-8"
  );
};

const obtenerTotal = async () => {
  const data = await filesystem.promises.readFile("products.json", "utf-8");
  const productosJSON = JSON.parse(data);

  const sumaTotal = productosJSON.reduce(
    (acc, producto) => acc + producto.precio,
    0
  );

  console.log(sumaTotal);

  return sumaTotal;
};

// Función para obtener un producto por su id
async function obtenerProductoPorId(id) {
  try {
    // Lee el contenido del archivo "products.json"
    const data = await fs.readFile("products.json", "utf-8");

    // Convierte el contenido leído a un objeto JSON
    const productosJSON = JSON.parse(data);

    // Busca el producto por su id
    const productoEncontrado = productosJSON.find(
      (producto) => producto.id === id
    );

    if (productoEncontrado) {
      return productoEncontrado;
    } else {
      throw new Error(`Producto con ID ${id} no encontrado.`);
    }
  } catch (error) {
    console.error("Error al obtener el producto por ID:", error);
    return null;
  }
}

const productoNuevo = { nombre: "pizza", precio: 1000, id: 5 };

crearProducto(productoNuevo);

/* console.log("Total de precios:", obtenerTotal()); */
obtenerTotal().then((total) => {
  console.log("Total de precios:", total);
});

obtenerProductoPorId(1).then((producto) => {
  if (producto) {
    console.log("Producto encontrado:", producto);
  } else {
    console.log("Producto no encontrado.");
  }
});
