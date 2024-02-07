const express = require("express");

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (request, response) => {
  console.log("alguien entro"); //esto no se ejecuta en el frontend
  response.send("<h1>hola mundo <a href='/contacto'>contacto</a></h1>"); //mi servidor me responde con un html que queda en el frontend
});

/* Hacer que cuando se entre /contacto se muestre un h1 que diga 'soy el contacto' y un link que diga volver que vuelva a la pagina inicial */
app.get("/contacto", (request, response) => {
  //esto no se ejecuta en el frontend
  response.send("<h1>soy el contacto <a href=" / ">home</a></h1>");
});

app.get("/:nombre/:apellido", (request, response) => {
  response.send(
    `<h1>El nombre es: ${request.params.nombre} ${request.params.apellido}</h1>`
  );
}); //http://localhost:3000/luis/patty asi se prueba en el frontend, en el navegador7

app.listen(PORT, () => {
  console.log(
    `El servidor se esta escuchando en direccion: http://localhost:${PORT}`
  );
});

app.get("/test", (request, response) => {
  const { nombre } = request.body;

  response.json({ nombre });
});

let products = [];

app.post("/products", (request, response) => {
  const { nombre, precio } = request.body;

  const persona = { nombre, precio };

  products.push(persona);

  response.json(products);
});
