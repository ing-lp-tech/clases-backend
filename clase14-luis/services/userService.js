const User = require("../models/userModel");

const createUser = async (name, lastName, age, email, password) => {
  const newUser = new User({
    name: name,
    lastName: lastName,
    age: age,
    email: email,
    password: password,
  });
  return await newUser.save();
};

module.exports = { createUser };
