const express = require('express');
const estructura = require("../modelos/excusas")

const rutas = express.Router();


rutas.post('/aprendiz' , (req, res)  => {
    const aprendiz = estructura(req.body)
    aprendiz
    .save()
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })

 rutas.get('/aprendiz' , (req, res)  => {
    estructura
    .find()
    .then((datos)=> {res.json(datos)})
    .catch((error) => res.json({message: error}) )
 })
 


 module.exports = rutas;
