const User = require("../models/userModel");

const loginUser = async (userEmail, password) => {
  const user = await User.findOne({ email: userEmail });

  if (!user) {
    return { ok: false, error: "No existe el usuario" };
  }

  const isPasswordCorrect = user.password === password;

  if (isPasswordCorrect) {
    return { ok: true, user: user };
  } else {
    return { ok: false, error: "Contraseña incorrecta" };
  }
};

module.exports = { loginUser };
