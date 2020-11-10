/*
const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');
const DB_NAME = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const celebrities = [
    { name: 'Tom Cruise', occupation:'actor', catchPhrase:'Someday. That\'s a dangerous word. It\'s really just a code for `never`' },
    { name: 'Beyonce', occupation:'singer', catchPhrase: 'Big B and that B stands for bands' },
    { name: 'Kim kardashian', occupation:'unknown', catchPhrase:'you put me in such an uncomfortable situation' }
    
  ];

  Celebrity.create(celebrities)
  .then(celebritiesFromDB => {
    console.log(`Created ${celebritiesFromDB} celebrities`);
    
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating celebrities from the DB: ${err}`));
 */ 

const mongoose = require('mongoose');
const Movie = require('../models/Movie.js');
const DB_NAME = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const movies = [
    { title: 'Thoroughbreds', genre:'drama', plot:'Two upper-class teenage girls in suburban Connecticut rekindle their unlikely friendship after years of growing apart. Together, they hatch a plan to solve both of their problems-no matter what the cost.' },
    { title: 'The Leisure Seeker', genre:'romance', plot:'A runaway couple goes on an unforgettable journey in the faithful old RV they call The Leisure Seeker, traveling from Boston to The Ernest Hemingway Home in Key West. They recapture their passion for life and their love for each other on a road trip that provides revelation and surprise right up to the very end.' },
    { title: 'The Hurricane Heist', genre:'action', plot:'Thieves attempt a massive heist against the U.S. Treasury as a Category 5 hurricane approaches one of its Mint facilities.' },
    
  ];

  Movie.create(movies)
  .then(moviesFromDB => {
    console.log(`Created ${moviesFromDB} movies`);
    
    mongoose.connection.close();
  })
  .catch(err => console.log(`An error occurred while creating movies from the DB: ${err}`));

