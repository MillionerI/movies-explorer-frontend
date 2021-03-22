import React from 'react';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Preloader from './../Preloader/Preloader.js';
import Footer from './../Footer/Footer.js';

export default function Movies({ isLoggedIn, movies, searchingMovies, removeMovie, saveMovie, isSaveMoviesId, isSearch, isSearchError, isPreloader}) {

	return(
		<section className="movies">
			<Header isLoggedIn={isLoggedIn}/>
			<SearchForm searchingMovies={searchingMovies} />
			{
				<MoviesCardList
					movies={movies}
					saveMovie={saveMovie}
					removeMovie={removeMovie}
					isSaveMoviesId={isSaveMoviesId}
					isSearch={isSearch}
					isSearchError={isSearchError}
				/>
			}
			{isPreloader && <Preloader />}
			<Footer />
		</section>
	)
}
