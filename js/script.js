"use strict";

const numberOfFilms = +prompt('Сколько ильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastViewedMovie = prompt('Последний просмотренный фильм?');
const movieRating = +prompt("На сколько оцените его?");

personalMovieDB.movies[lastViewedMovie] = movieRating;

const lastViewedMovie2 = prompt('Последний просмотренный фильм?');
const movieRating2 = +prompt("На сколько оцените его?");

personalMovieDB.movies[lastViewedMovie2] = movieRating2;
console.log(personalMovieDB);