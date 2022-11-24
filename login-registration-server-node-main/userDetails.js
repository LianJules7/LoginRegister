const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    nombres: String,
    apellidos: String,
    telefono: String,
    documento: { type: String, unique: true },
    correo: { type: String, unique: true },
    password: String,
  },
  {
    collection: "admins",
  }
);

mongoose.model("admins", UserDetailsScehma);
