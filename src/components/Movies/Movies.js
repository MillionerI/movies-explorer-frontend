import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Preloader from './../Preloader/Preloader.js';
import Footer from './../Footer/Footer.js';

export default function Movies({isLoggedIn, isPreloader}) {

	const location = useLocation().pathname;

	return(
		<section className="movies">
			<Header isLoggedIn={isLoggedIn}/>
			<SearchForm />
			<MoviesCardList />
			{location === '/movies' && <button className="movies__add-movies-btn">Ещё</button>}
			{isPreloader && <Preloader />}
			<Footer />
		</section>
	)
}