const mongoose = require('mongoose');

const estructuraTER = mongoose.Schema({
    ubicacion: {
        type: String,
        
    },
    
    fecha: {
        type: String,
        
    },
    magnitud: {
        type: Number
        
    }
})

module.exports = mongoose.model('empleado', estructuraTER);
