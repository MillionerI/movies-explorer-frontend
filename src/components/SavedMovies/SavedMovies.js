import React from 'react';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Footer from './../Footer/Footer.js';

export default function SavedMovies({isLoggedIn, movies, searchingMovies, removeMovie, isSaveMoviesId}) {
	return(
		<section className="movies">
			<Header isLoggedIn={isLoggedIn}/>
			<SearchForm searchingMovies={searchingMovies} />
			<MoviesCardList movies={movies} removeMovie={removeMovie} isSaveMoviesId={isSaveMoviesId}/>
			<Footer />
		</section>
	)
}