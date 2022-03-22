const movieFetch = require('../utils/movieUtil');

const getMovie = async (req, res) => {
    const movie = await movieFetch.getMovie(req.params.title);
    res.status(200).json(movie);
}

const createMovie = async (req, res) => {

 }

const updateMovie = async (req, res) => { }

const deleteMovie = async (req, res) => { }

const movie = {
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}

module.exports = movie;