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

}

const deleteMovie = (req, res) => {

 }

const movie = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

module.exports = movie;