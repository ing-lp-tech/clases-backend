const express = require("express");
const loginRouter = require("./router/loginRouter");
const registerRouter =require("./router/registerRouter")
const { usuarios } = require("./manager/userManager");
const app = express();

const PORT = 3000;

/* Middleware: Habilita que envíe JSON por el cuerpo de una solicitud.
   Este middleware permite que la aplicación procese datos en formato JSON en las solicitudes entrantes. */
app.use(express.json());

app.get("/", (req, res) => {
  console.log("se hizo un get");

  res.json(
    /*  `<h1>El nombre es: ${request.params.nombre} ${request.params.apellido}</h1>` */
    { ok: true }
  );
});

app.use("/api/login", loginRouter);

app.use("/api/register", registerRouter);

/* 
Registrar el endpoint 

/api/login

POST vamos a enviar un body con el email y el password y vamos a verificar en un array de usuarios si existe dicho usuario

En caso de existir vamos a responder con un {ok: true, message: "Logged! :)"}

En caso de no existir dicho usuario vamos a responder con un {ok: false, message: "User not found"}


/api/register

POST 
vamos a enviar un body con un email un password y un name. En caso de existir los 3 datos (sino se devolvera un {ok: false, message: 'datos no validos :("")}).

Se debera comprobar si no existia previamente dicho email en caso de existir se devolvera un {ok: false, message: 'Email ya registrado'}

sino se devolvera un {ok: true, message: 'usuario registrado con exito'} ademas de guardar en el array de usuarios dicho usuario registrado.

/api/register


PUT
Vamos a recibir un body con 3 valores

campo a modificar (que puede ser 'password' o 'name')
nuevo valor (representa el valor por el que vamos a actualizar)
email representa el email del usuario 

POR EJEMPLO req.body = {"campo": "name", "value": "pepe", "email": "cosme@gmail.com"}

Vamos a verificar que el usuario con ese email exista

Si existe, vamos a verificar que el campo sea 'password' o 'name', sino se devolvera un {ok: false, message: "forbidden action"} 
Sino:
vamos a modificar el campo a modificar por el valor nuevo y vamos a devolver {ok: true, message: "usuario actualizado con exito", user: objetoModificado}

Si no existe vamos a devolver un {ok: false, message: "User not found"}

/api/register


/api/register/:email
DELETE

Vamos a recibir por param un email y por body el password 

Verificamos si el usuario existe (con email)

Si existe vamos a verificar si la contraseña para ese mail es correcta

Si es correcta la contraseña vamos a eliminar el usuario y vamos a devolver un {ok: true, message: "usuario eliminado con exito"}

Si no es correcta la contraseña se devolvera {ok: false, message: 'credenciales invalidas'}

Si no existe el usuario con ese email se devolvera {ok: false, message: 'User not found'}

*/




app.listen(PORT, () => {
  console.log(
    `El servidor se esta escuchando en direccion: http://localhost:${PORT}`
  );
});

/* 

Todas las endpoints que apunten a /api/register deberan registrarse en el enrutador registerRouter usando express.Router()

*/
