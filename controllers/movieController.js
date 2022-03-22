const movieFetch = require('../utils/movieUtil');

let newMovie = {};

const getMovie = async (req, res) => {
    const movie = await movieFetch.getMovie(req.params.title);
    res.status(200).json(movie);
}

const createMovie = (req, res) => {
    newMovie = req.body;
    console.log(newMovie);
    res.status(201).send(`Película ${newMovie.Title} guardada`);
}

const updateMovie = (req, res) => {
    newMovie.Title = req.body.Title;
    console.log(newMovie);
    res.status(200).send(`Película ${newMovie.Title} actualizada`);
}

const deleteMovie = (req, res) => {
    res.status(200).send(`Película ${newMovie.Title} borrada`);
    newMovie = '--- Aquí no hay peli ---';
    console.log({ message: newMovie });
}

const movie = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

module.exports = movie;