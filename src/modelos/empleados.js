const mongoose = require('mongoose');

const estructuraEMP = mongoose.Schema({
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
        
    }
})

module.exports = mongoose.model('empleado', estructuraEMP);
