const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const misRutas = require('./rutas/empleados')



const app = express();
const puerto= process.env.PUERTO ||  9000;


//---------
app.use(express.json());
app.use('/api', misRutas);



//-------------- rutas
app.get('/', (req, res) =>{
    res.send('esta es mi api');
} );

//--------------- conexion a mongo

//mongoose.connect(process.env.MONGO_URI).then(() => {console.log('conexion exitosa')}).catch((error) =>{console.error(error)});
mongoose.connect(process.env.mongo_uri).then(() => {console.log('conexion exitosa')}).catch((error) =>{console.error(error)});




app.listen(puerto, () => console.log("ejecutandose en el puerto: ", puerto))