const express = require('express')
const Movie = require('../models/Movie');
const router  = express.Router();

router.get('/movies', (req, res) => {
  Movie.find()
  .then((allMoviesFromMongoDB) => {
    res.render('movies', {movies: allMoviesFromMongoDB});
  })
  .catch((err) => {
   res.render('movies/index', {err}); 
  })
});


router.get('/movies/add', (req, res) => {
  Movie.find()
  .then((addMovie) => {
    res.render('celebrities/new', {movie: addMovie});
  })
  .catch((err) => {
    res.render('error', {err})
  })
});

router.post('/movies/add', (req, res) => {
  let {title, genre, plot} = req.body;

  Movie.create({
    title,
    genre,
    plot
  })
  .then(() => {
    res.redirect('/movies');
  })
  .catch((err) => {
    res.render('movies/add', {err});
  });
});

router.get('/movies/:movieId/edit', (req, res) => {
  let movieId = req.params.movieId;

  Movie.findById(movieId)
  . then((theMoviesFound) => {
    
      res.render("movies/edit", {movie: theMoviesFound});
  })
  .catch((err) => {
    res.render('error', {err});
  })
});


router.post('/movies/:movieId/edit', (req, res) =>{
  let movieId = req.params.movieId;
  let {title, genre, plot} = req.body;
  Movie.findByIdAndUpdate(movieId, {
    title,
    genre,
    plot
  })
  .then(() => {
    res.redirect('/movies');
  });
});


router.get('/movies/:movieId', (req, res) => {
  let movieId = req.params.movieId;

  Movie.findById(movieId)
  .then((moviesFound) => {
    res.render('movies/details', {movie:moviesFound});
  })
  .catch((err) => {
    res.render('error', {err})
  })
});

router.post('/movies/:movieId/delete', (req, res) => {
  let movieId = req.params.movieId;

  Movie.findByIdAndDelete(movieId)
  .then(() => {
    res.redirect('/movies');
  })
  .catch((err) => {
    res.render('error', {err})
  })
});



module.exports = router;
