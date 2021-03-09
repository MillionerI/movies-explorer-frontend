import React from 'react';
import Header from './../Header/Header.js';
import Promo from './../Promo/Promo.js';
import AboutProject from './../AboutProject/AboutProject.js';
import Techs from './../Techs/Techs.js';
import AboutMe from './../AboutMe/AboutMe.js';
import Footer from './../Footer/Footer.js';

export default function Main({isLoggedIn}) {
	return(
		<section className="main">
			<Header isLoggedIn={isLoggedIn}/>
			<Promo />
			<AboutProject />
			<Techs />
			<AboutMe />
			<Footer />
		</section>
	)
}