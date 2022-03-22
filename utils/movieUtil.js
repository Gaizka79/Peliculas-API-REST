const fetch = require('node-fetch');

require('dotenv').config();
const apiKey = process.env.API_KEY;


async function getMovie (filmName) {
    try {
        let response = await fetch(`http://www.omdbapi.com/?t=${filmName}&apikey=${apiKey}`); //{}
        let film = await response.json(); //{}
        return film;
    } catch (error) {
        console.log(`EROR : ${error.stack}`);
    }
} 

const movie = {
    getMovie
}

module.exports = movie;

// Test
//getMovie("titanic").then(data=>console.log(data))