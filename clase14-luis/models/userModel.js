const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("user", userSchema);

/* const user1 = new User({
  name: "Cosme",
  lastName: "Fulanito",
  age: 15,
  email: "cosme@gmail.com",
  password: 123456,
});

console.log(user1); */

module.exports = User;
