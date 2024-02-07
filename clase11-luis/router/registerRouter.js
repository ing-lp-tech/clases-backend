const express = require("express");
const { usuarios } = require("../manager/userManager");

const registerRouter = express.Router();

//http://localhost:3000/api/register/cosme@gmail.com
/* {
    "password": "cosme123"
  } */
registerRouter.delete("/:email", (req, res) => {
  const { email } = req.params; // Obtener el email del usuario a eliminar desde los parámetros de la URL
  const { password } = req.body; // Obtener la contraseña proporcionada en el cuerpo de la solicitud,en body datos sensibles

  // Verificar si el usuario existe en el array de usuarios
  const userIndex = usuarios.findIndex((user) => user.email === email);

  if (userIndex === -1) {
    // Si el usuario no existe, devolver un mensaje de error

    return res.status(404).json({ ok: false, message: "User not found" });
  }

  // Verificar si la contraseña proporcionada coincide con la contraseña del usuario
  if (usuarios[userIndex].password === password) {
    // Si las credenciales son correctas, eliminar el usuario
    usuarios.splice(userIndex, 1);
    console.log("usuarios:", usuarios);
    return res
      .status(200)
      .json({ ok: true, message: "Usuario eliminado con éxito" });
  } else {
    // Si las credenciales son incorrectas, devolver un mensaje de error
    return res
      .status(400)
      .res.json({ ok: false, message: "Credenciales inválidas" });
  }

  console.log("usuarios:", usuarios);
});

//http://localhost:3000/api/register/
registerRouter.post("/", (req, res) => {
  const { email, password, name } = req.body;

  //verifico si los dstos no estan vacios
  if (!email || !password || !name) {
    res.json({ ok: false, message: "Datos no validos" });
    return;
  }

  // http://localhost:3000/api/register/    en formato POST en el Body del postman
  /*   {
    "email": "luis@gmail.com",
    "password": "1234",
    "name": "luis"
  } */
  const emailExists = usuarios.some((user) => user.email === email);

  if (emailExists) {
    res.json({ ok: false, message: "Email registrado" });
    return;
  }

  // Agrego el nuevo usuario
  usuarios.push({ email, password, name });
  res.json({ ok: true, message: "Usuario registrado exitosamente" });

  // Verifica si el usuario existe en el array
  const usuario = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );
  /* 
    if (usuario) {
      res.json({ ok: true, message: "Logueado" });
    } else {
      res.json({ ok: false, message: "No logueado" });
    } */
});

//http://localhost:3000/api/register/
/* {
    "campo": "name",
    "value": "luis",
    "email": "cosme@gmail.com"
  } */
registerRouter.put("/", (req, res) => {
  const { campo, value, email } = req.body;

  // Verifico si el usuario existe
  const userExist = usuarios.findIndex((user) => user.email === email);

  console.log("userExist:", userExist);

  if (userExist === -1) {
    res.json({ ok: false, message: "usuario no encontrado" });
  }

  // Verificar que el campo sea 'password' o 'name'
  if (campo !== "password" && campo !== "name") {
    res.json({ ok: false, message: "Forbidden action" });
  }

  // Actualizar el campo con el nuevo valor
  usuarios[userExist][campo] = value;

  // Devolver la respuesta con el usuario modificado
  res.json({
    ok: true,
    message: "Usuario actualizado con éxito",
    user: usuarios[userExist],
  });

  console.log(usuarios);
});

module.exports = registerRouter;
