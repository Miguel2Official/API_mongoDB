const express = require('express');
const estructura = require("../modelos/terremoto")

const rutas = express.Router();


rutas.post('/terremoto' , (req, res)  => {
    const terremoto = estructura(req.body)
    terremoto
    .save()
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })


 rutas.get('/empleados' , (req, res)  => {
    estructura
    .find()
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })
 

 rutas.get('/terremoto/:id' , (req, res)  => {
    const {id} = req.params;
    estructura
    .findById( id )
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })
 

 rutas.put('/terremoto/:id' , (req, res)  => {
    const {id} = req.params;
    const {ubicacion, fecha, magnitud} = req.body;
    estructura
    .updateOne({_id:id}, { $set: {ubicacion, fecha, magnitud}} )
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })
 


 module.exports = rutas;
