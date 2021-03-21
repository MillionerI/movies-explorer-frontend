import React from 'react';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Preloader from './../Preloader/Preloader.js';
import Footer from './../Footer/Footer.js';

export default function Movies({ isSaveMoviesId, isSaveMovies, isSearch, isHandleMovies, searchResultsMovie, 
	saveMovie, removeMovie, isLoggedIn, isPreloader }) {

	return(
		<section className="movies">
			<Header isLoggedIn={isLoggedIn}/>
			<SearchForm isHandleMovies={isHandleMovies} />
			{
				<MoviesCardList 
					isSaveMoviesId={isSaveMoviesId}
					isSearch={isSearch} 
					isSaveMovies={isSaveMovies}
					searchResultsMovie={searchResultsMovie} 
					saveMovie={saveMovie}
					removeMovie={removeMovie}
				/>
			}
{/*			{
				// (!isPreloader && searchResultsMovie.length !== 0) &&
				// <button className="movies__add-movies-btn">Ещё</button>
				// (!isPreloader && isMoviesFromApi.length === 0 <p className="movies__not-found">Ничего не найдено</p>)
			}*/}
			{isPreloader && <Preloader />}
			<Footer />
		</section>
	)
}