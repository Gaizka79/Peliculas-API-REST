const express = require('express');
const router = express.Router();

const entries = require('../controllers/movieController');


// [GET] http://localhost:3000/api/film/:title 
// Retorna un JSON con los detalles de la peli en concreto buscada. Payload {titulo:"Titanic", autor:"James Cameron", descripción:"xxx", src:"titanic.png",etc...}


// [POST] http://localhost:3000/api/film/ 
// Se envía por POST los datos de la película a crear y retorna un status 200. Payload {message: "Se ha guardado Titanic"}


// [PUT] http://localhost:3000/api/film/ 
// Actualiza los datos de una película y retorna un status 200. Payload {id:"0", message: "Se ha actualizado Titanic"}


// [DELETE] http://localhost:3000/api/film/ 
// Borra una película y retorna un status 200. Payload {id: "0", message: "Se ha borrado Titanic"}


// En caso de ruta no encontrada o error, devolver un mensaje de error. Especificar si ha sido un 404, 500, etc...