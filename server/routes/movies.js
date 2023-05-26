const express = require('express');
const router = express.Router();

const mockData = require('../movieMockData');

let movies = mockData;

// movies is set in the endpoint in the index file
router.get('/', (req, res) => {
  res.json(movies);
});

// GET // get a movie by id
router.get('/:id', (req, res) => {
  const movieID = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieID);

  if (!movie) {
    return res.status(404).json({
      message: 'No movie with this id was found, please try an other!',
    });
  }

  res.json(movie);
});

// DELETE // delete a movie by id
router.delete('/:id', (req, res) => {
  const movieID = parseInt(req.params.id);
  const movie = movies.find((m) => m.id === movieID);

  // taking out the title from the movie to show in response
  let title = movie.title;

  if (!movie) {
    return res.status(404).json({
      message: 'No movie with this id was found, please try an other!',
    });
  }

  const filteredData = movies.filter((movie) => movie.id !== movieID);

  movies = filteredData;

  res.json(`The movie ${title} with the id: ${movieID} successfully removed`);
});

// POST // adding a new movie - Title, Year, Released, Genre must be included in the req.body
router.post('/', (req, res) => {
  const movie = req.body.movie;

  //check validation
  // Title, Year, Released, Genre, imdbID
  /* const title = movie.title;
  const released = movie.release_date;
  const overview = movie.overview; */
  const id = movie.id;

  let randomIdNum = Math.floor(Math.random() * 10000 + 1);

  let newId;

  // checking if id is included and is not string, has to be number
  if (typeof id === 'string') {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message:
        'Id ("id": 59) must be a number not a string, or don´t add one and it will generate one automatically',
    });
  }
  if (!id) {
    newId = `${randomIdNum}`;
  } else {
    newId = id;
  }

  // check if title exists
  /* if (title === '') {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Title is missing a value, please include a movie name',
    });
  }
 */
  /* if (!title) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Title is missing, please include a movie title',
    });
  } */

  // validate genre is included
  /* if (!overview) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Overview is missing, please include an overview',
    });
  } */

  // validate released is included
  /* if (!released) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Released is missing, please include a Released',
    });
  } */

  // adding new movie req.body is movie object
  const newMovie = {
    ...movie,
    id: parseInt(newId),
  };

  movies.push(newMovie);
  res.json(newMovie);
});

// PUT // updating a movie
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const movie = req.body.movie;

  // Title, Year, Released, Genre, imdbID
  /* const title = movie.title;
  const released = movie.release_date;
  const overview = movie.overview; */

  // could have seprated and made these their own validation functions

  // check if title exists
  /* if (title === '') {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Title is missing a value, please include a movie name',
    });
  } */

  /* if (title === null || title === undefined) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Title is missing, please include a movie title',
    });
  } */

  // check released
  /* if (!released) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Released is missing, please include a released',
    });
  } */

  // check genre
  /* if (overview === '' || overview === null || overview === undefined) {
    return res.status(400).json({
      code: 'InvalidJsonInput',
      message: 'Overview is missing, please include a movie overview',
    });
  } */

  const index = movies.findIndex((movie) => movie.id === id);

  if (index === -1) {
    return res.status(404).json({
      message: 'No movie found with the given id, please check the id',
    });
  }

  const updatedMovie = { ...movies[index], ...movie };
  movies[index] = updatedMovie;

  res.json(updatedMovie);
});

module.exports = router;
