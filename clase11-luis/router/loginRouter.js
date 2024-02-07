const express = require("express");
const { usuarios } = require("../manager/userManager");

const loginRouter = express.Router();

/* /api/login/ */
loginRouter.post("/", (req, res) => {
  const { email, password } = req.body;
  const usuarioEncontrado = usuarios.find(
    (usuario) => usuario.email === email && usuario.password === password
  );
  if (usuarioEncontrado) {
    res.json({ ok: true, message: "Logged! :)" });
  } else {
    res.json({ ok: false, message: "User not Found" });
  }
});

module.exports = loginRouter;
