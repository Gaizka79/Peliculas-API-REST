const express = require('express');
const router = express.Router();

const movie = require('../controllers/movieController');


// [GET] http://localhost:3000/api/film/:title 
// Retorna un JSON con los detalles de la peli en concreto buscada. Payload {titulo:"Titanic", autor:"James Cameron", descripción:"xxx", src:"titanic.png",etc...}
router.get('/film/:title', movie.getMovie);

// [POST] http://localhost:3000/api/film/ 
// Se envía por POST los datos de la película a crear y retorna un status 200. Payload {message: "Se ha guardado Titanic"}
router.post('/film', movie.createMovie);

// [PUT] http://localhost:3000/api/film/ 
// Actualiza los datos de una película y retorna un status 200. Payload {id:"0", message: "Se ha actualizado Titanic"}
router.put('/film', movie.updateMovie);

// [DELETE] http://localhost:3000/api/film/ 
// Borra una película y retorna un status 200. Payload {id: "0", message: "Se ha borrado Titanic"}
router.delete('/film', movie.deleteMovie);

// En caso de ruta no encontrada o error, devolver un mensaje de error. Especificar si ha sido un 404, 500, etc...


module.exports = router;