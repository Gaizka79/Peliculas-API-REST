// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)

// Rutas
const movieRouter = require('./routes/movieRoute');


const app = express(); // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000;

app.use(express.json()); // Para habilitar recepción de datos JSON en una request

// Rutas
app.use("/api", movieRouter);// API

// 404
app.use(function (req, res, next) {
    return res.status(404).send({ message: 'Route' + req.url + ' Not found.' });
});

// 500 - Any server error
app.use(function (err, req, res, next) {
    return res.status(500).send({ error: err });
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})