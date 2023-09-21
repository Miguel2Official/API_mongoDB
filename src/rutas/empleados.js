const express = require('express');
const estructura = require("../modelos/empleados")

const rutas = express.Router();



//------------rutas post
rutas.post('/empleado' , (req, res)  => {
   const empleado = estructura(req.body)
   empleado
   .save()
   .then((datos)=> {res.json(datos)})
   .catch((error) => res.json({message: error}) )
})



// metodo get

rutas.get('/empleado' , (req, res)  => {
   estructura
   .find()
   .then((datos)=> {res.json(datos)})
   .catch((error) => res.json({message: error}) )
})

// metodo get para encontrar por parametros

rutas.get('/empleado/:id' , (req, res)  => {
   const {id} = req.params;
   estructura
   .findById( id )
   .then((datos)=> {res.json(datos)})
   .catch((error) => res.json({message: error}) )
})



// metod put

rutas.put('/empleado/:id' , (req, res)  => {
   const {id} = req.params;
   const {nombre, edad, cedula, direccion} = req.body;
   estructura
   .updateOne({_id:id}, { $set: {nombre, edad, cedula, direccion}} )
   .then((datos)=> {res.json(datos)})
   .catch((error) => res.json({message: error}) )
})



// metodo delete

rutas.delete('/empleado/:id' , (req, res)  => {
   const {id} = req.params;
  
   estructura
   .deleteOne ({_id:id} )
   .then((datos)=> {res.json(datos)})
   .catch((error) => res.json({message: error}) )
})





module.exports = rutas;