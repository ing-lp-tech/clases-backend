const users = require("../data");

const login = (userToAuth) => {
  const usuarioEncontrado = users.find(
    (user) =>
      user.email === userToAuth.email &&
      user.contrasena === userToAuth.contrasena
  );

  if (usuarioEncontrado) {
    return { ok: true, usuario: usuarioEncontrado };
  } else {
    return { ok: false, error: "Credenciales invalidas" };
  }
};

module.exports = { login };
