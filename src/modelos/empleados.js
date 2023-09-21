const { Schema, model } = require("mongoose");

const estructuraEMP = Schema({
  nombre: {
    type: String,
  },
  edad: {
    type: Number,
  },
  cedula: {
    type: String,
  },
  direccion: {
    type: String,
  },
});

module.exports = model("empleado", estructuraEMP);
