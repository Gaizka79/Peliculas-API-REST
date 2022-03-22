// Módulos externos
const express = require('express'); // Importando módulo NPM (libería)

// Rutas
const movieRouter = require('./routes/movieRoute');


const app = express() // Inicializa el servidor. App es un bjeto que representa el server
const port = 3000

app.use(express.json()); // Para habilitar recepción de datos JSON en una request

// Rutas
app.use("/api", movieRouter);// API


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})