const mongoose = require('mongoose');

const estructuraEXC = mongoose.Schema({
    nombre: {
        type: String,
        
    },
    
    cedula: {
        type: String,
        
    },
    descripcion: {
        type: String,
        
    }
})

module.exports = mongoose.model('empleado', estructuraEXC);
