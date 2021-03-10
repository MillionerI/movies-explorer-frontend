import React from 'react';
import { useLocation } from 'react-router-dom';
import MoviesCard from './../MoviesCard/MoviesCard.js';
import config from './../../config.js';

export default function MoviesCardList() {
	const { movies } = config;
	const savedMovies = movies.filter((movie) => movie.save === true);
	const location = useLocation().pathname;

  return (
      <ul className="movies-card-list">
        { 
        	location === '/movies' ?
          (movies.map((movie) => (<MoviesCard movieData={movie} key={movie.id} />)))
          :
          (savedMovies.map((movie) => (<MoviesCard movieData={movie} key={movie.id} />)))
        }
      </ul>
  );
}
